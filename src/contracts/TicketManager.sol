// contracts/GameItems.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./NFTTicket.sol";
import "@openzeppelin/contracts/proxy/Clones.sol";

/**
 * @title TicketManager Contract
 * @dev Contract to manage events and  ticketing
 *   Allows for
 *   # Creation of Events
 *   # Checking in of Patrons to events
 *   # Minting Tickets
 *   # Refunding Tickets
 *   # Authorizing of event managers to create and manage events
 * @author Dominic Leon Hackett
 */

contract TicketManager is Ownable {
        address NFTTicketImplementation;
    
    struct checkIn{
        bool checkedIn;
    }

    struct eventCheckIn {
        mapping (address => checkIn) checkIns;
    }

    struct manager {
      bool isValue;
    }   

    struct ticketClass {
        string name;
        uint256 price;
        uint256 numberOfTickets;
        uint256 mintedTickets;
        uint256 refundedTickets;
        bool isValue;
    }

    struct Event {
        string name;
        uint256 startdate;
        uint256 enddate;
        uint256 platformFee;
        address nftTickets;
        address owner;
        mapping (uint256 => ticketClass)  ticketClasses;
        uint256 numberOfTicketClasses;
        string[] metadataURI;
        string uri;
        string ownerProfile;
        bool checkInsAllowed;
        bool isValue;
        bool fundsWithdrawn;
        bool platformFeeWithdrawn;
    }
   uint256 private platformFee=1; //Default 1% of ticket sales platform Fee
   mapping (address => manager) managers;
   mapping (address => Event) events;
   mapping (address =>eventCheckIn) checkins;
   mapping (address => string) profiles;
   
   event EventCreated(address indexed owner,address indexed eventId,string name,uint256 startdate,uint256 enddate,string uri);
   event TicketMinted(address indexed owner,address indexed eventId,uint256 ticketId,uint256 dateMinted);
   event CheckedIn(address indexed eventId,address indexed patron,uint256 ticketId,uint256 dateCheckedIn);
 /**
   * @dev Modifier to check if msg.sender is a manager  
   * Managers are allowed to create and manager events
**/
   modifier isManager()
   {
      require(managers[msg.sender].isValue,"Unauthorized address not a manager."); 
       _;
   }


   /**
   * @dev Modifier to check if event is valid 
   
**/
   modifier isEvent(address eventId)
   {
      require(events[eventId].isValue,"Not a valid event."); 
       _;
   }

    /**
   * @dev Modifier to check if is event manager 
   
**/
   modifier isEventManager(address eventId)
   {
      require(events[eventId].isValue,"Not a valid event."); 
      require(events[eventId].owner== msg.sender,"Unauthorized address. Not owner.");
       _;
   }

 /**
   * @dev Modifier to check if is valid ticketClass 
   
**/
   modifier isTicketClass(address eventId,uint256 ticketId) 
   {
      require(events[eventId].isValue,"Not a valid event.");
      require(events[eventId].ticketClasses[ticketId].isValue,"Invalid ticket class."); 
       _;
   }

   /**
   * @dev Constructor for TicketManager 
  
   **/
   constructor(){
          NFTTicketImplementation = address(new NFTTicket());
          setManager(true,msg.sender);

   }

   /**
   * @dev Function allows event manager to create an event 
   * @param _name of the event
   * @param _symbol of the NFT
   * @param _metadataURI array for each class of ticket
   * @param _startdate of event
   * @param _enddate of event
   * @param  _ticketClasses Types of tickets
   * @param _uri
   **/

   function createEvent(string calldata _name,string memory tokenName,string calldata _symbol,string[] calldata _metadataURI, uint256  _startdate ,uint256 _enddate, ticketClass[] memory _ticketClasses,string memory _uri) isManager public {
      address clone = Clones.clone(NFTTicketImplementation);

      NFTTicket(clone).initialize(tokenName,_symbol,address(this),_metadataURI);
      events[clone].name = _name;
      events[clone].owner = msg.sender;
      events[clone].startdate = _startdate;
      events[clone].enddate = _enddate;
      events[clone].nftTickets = clone;
      events[clone].platformFee = platformFee;
      events[clone].uri = _uri;
      events[clone].numberOfTicketClasses = _metadataURI.length;

  uint256 index;
     //events[clone].ticketClasses = new ticketClass[](0);
     events[clone].metadataURI = new string[](0);

  for(index =0;index < _ticketClasses.length;index++){
   events[clone].ticketClasses[index] = _ticketClasses[index];  
  //}
  //events[clone].ticketClasses.push(ticketClass(_ticketClasses[index].name,_ticketClasses[index].price,_ticketClasses[index].numberOfTickets,_ticketClasses[index].mintedTickets,_ticketClasses[index].refundedTickets,true));
   events[clone].metadataURI.push(_metadataURI[index]);  
  }   
      events[clone].isValue = true;
      events[clone].checkInsAllowed = false;
      emit EventCreated(msg.sender,clone,_name,_startdate,_enddate,_uri);
    
   }

   /**
   * @dev Function gets event data 
   * @param eventId id of the event
   * 
   **/
   function getEvent(address eventId) public view isEvent(eventId) returns(string memory name,
        uint256   startdate,
        uint256   enddate,
        uint256  _platformFee,
        
        
        
        string[] memory metadataURI,
        string memory uri,
        string memory ownerProfile,
        address owner,
        bool checkInsAllowed,
      
        bool fundsWithdrawn,
        bool platformFeeWithdrawn) {
        name =events[eventId].name;
        startdate=events[eventId].startdate;
        enddate=events[eventId].enddate;
        _platformFee =platformFee;
        metadataURI=events[eventId].metadataURI;
        uri=events[eventId].uri;
        ownerProfile = getProfile(events[eventId].owner);
        owner = events[eventId].owner;
        checkInsAllowed=events[eventId].checkInsAllowed;
      
        fundsWithdrawn=events[eventId].fundsWithdrawn;
        platformFeeWithdrawn=events[eventId].platformFeeWithdrawn;
          
   }

   /**
   * @dev Function gets event funds raised 
   * @param eventId id of the event
   * 
   **/
   function getEventFundsTotal(address eventId) public view isEvent(eventId) returns(uint256 funds,uint256 fee,bool fundsWithdrawn,bool platformFeeWithdrawn) {
     
      uint256 _platformFeePercentage = events[eventId].platformFee;
      fundsWithdrawn =  events[eventId].fundsWithdrawn;       
      platformFeeWithdrawn = events[eventId].platformFeeWithdrawn;  
      
      for(uint256 index;index < events[eventId].numberOfTicketClasses;index++)
      {
          funds += events[eventId].ticketClasses[index].price*(events[eventId].ticketClasses[index].mintedTickets-events[eventId].ticketClasses[index].refundedTickets);
      }

      fee =    (funds/1000)*(_platformFeePercentage*10);
      funds = funds-fee;
    
   }

   /**
   * @dev Function mints ticket 
   * @param eventId id for event
   * @param ticketId ticket id
   **/
   function mintTicket(address eventId,uint256 ticketId) public payable isTicketClass(eventId,ticketId){
       IERC1155 nft = IERC1155(events[eventId].nftTickets);
       address nftAddress = events[eventId].nftTickets;
 
       for(uint256 index=0;index < events[eventId].numberOfTicketClasses;index++)
          require(nft.balanceOf(address(msg.sender),index+1)==0,"User already has a ticket.");
        require(msg.value == events[eventId].ticketClasses[ticketId].price,"Not Enough Balance" ); 
        require(events[eventId].ticketClasses[ticketId].mintedTickets+1 <= events[eventId].ticketClasses[ticketId].numberOfTickets,"Tickets sold out.");
        (bool success, ) = nftAddress.call(abi.encodeWithSignature("mint(address,uint256,uint256)",msg.sender,ticketId+1,1));
        require(success,"Error minting ticket NFT."); 
         events[eventId].ticketClasses[ticketId].mintedTickets +=1;
        emit TicketMinted(msg.sender,eventId,ticketId,block.timestamp);
 
   }

     /**
   * @dev Function allow patrons to check in to event 
   * @param eventId id
   * @param allow true or false
   **/
  function setCheckIns(address eventId,bool allow) public isEventManager(eventId)  {
      events[eventId].checkInsAllowed = allow;
  }

 /**
   * @dev Function patron check in to event 
   * @param eventId id
   * @param ticketId id
   **/
   function checkInToEvent(address eventId,uint256 ticketId) public isTicketClass(eventId,ticketId) {
       IERC1155 nft = IERC1155(events[eventId].nftTickets);
       require(events[eventId].checkInsAllowed,"Can't check in at this time.");
       require(nft.balanceOf(address(msg.sender),ticketId+1)> 0,"User doesn't have a ticket.");
       require(checkins[eventId].checkIns[msg.sender].checkedIn == false,"Already checked In"); 
       checkins[eventId].checkIns[msg.sender].checkedIn = true;
       emit CheckedIn( eventId,msg.sender, ticketId,block.timestamp);

   }

    /**
   * @dev Function refunds ticket  
   * @param eventId id
   * @param ticketId id
   **/
   function refund(address eventId,uint256 ticketId) public  isTicketClass(eventId,ticketId) {
      IERC1155 nft = IERC1155(events[eventId].nftTickets);
      address nftAddress = events[eventId].nftTickets;
      require(events[eventId].startdate > block.timestamp,"Event already passed. Can't process refund.");
      require(nft.balanceOf(address(msg.sender),ticketId+1)> 0,"User doesn't have a ticket.");
      require(checkins[eventId].checkIns[msg.sender].checkedIn == false,"Already checked In. Can't refund ticket."); 
      nft.safeTransferFrom(msg.sender, address(this), ticketId+1, 1, "");
   
     (bool _burnt, ) =  nftAddress.call(abi.encodeWithSignature("burn(address,uint256)",address(this),ticketId+1));
     require(_burnt,"Burn not successful.");
     (bool sent,)= payable(msg.sender).call{value:events[eventId].ticketClasses[ticketId].price}("");
     require(sent,"Unable to process refund.");
     events[eventId].ticketClasses[ticketId].refundedTickets +=1;

   }

    /**
   * @dev Function widthdraw funds from event
   * @param eventId id
   * 
   **/
   function withdrawFunds(address eventId) public isEventManager(eventId) {
      require(events[eventId].startdate < block.timestamp && events[eventId].enddate < block.timestamp ,"Event not ended. Can't withdraw funds");
      
      require(events[eventId].fundsWithdrawn == false,"Funds already withdrawn.");
      uint256 funds;
      uint256 _platformFeePercentage = events[eventId].platformFee;
      uint256 fee;
      for(uint256 index;index < events[eventId].numberOfTicketClasses;index++)
      {
          funds += events[eventId].ticketClasses[index].price*(events[eventId].ticketClasses[index].mintedTickets-events[eventId].ticketClasses[index].refundedTickets);
      }

      fee =    (funds/1000)*(_platformFeePercentage*10);
     bool sent = payable(msg.sender).send(funds-fee);
     require(sent,"Unable to process refund.");
     events[eventId].fundsWithdrawn =true;
   }


   
    /**
   * @dev Function withdraw fees from event
   * @param eventId id
   * 
   **/
function withdrawFees(address eventId) public isEvent(eventId) onlyOwner {
      require(events[eventId].platformFeeWithdrawn == false,"Fees already withdrawn.");
      require(events[eventId].startdate < block.timestamp && events[eventId].enddate < block.timestamp ,"Event not ended. Can't withdraw fees");
      
      uint256 funds;
      uint256 _platformFeePercentage = events[eventId].platformFee;
      uint256 fee;
      for(uint256 index;index < events[eventId].numberOfTicketClasses;index++)
      {
          funds += events[eventId].ticketClasses[index].price*(events[eventId].ticketClasses[index].mintedTickets-events[eventId].ticketClasses[index].refundedTickets);
      }

      fee =    (funds/1000)*(_platformFeePercentage*10);
     bool sent = payable(msg.sender).send(fee);
     require(sent,"Unable to process refund.");
     events[eventId].platformFeeWithdrawn =true;
   }

 /**
   * @dev Function widthdraw all funds  
   **/
   
function widthdraw () public onlyOwner {
    payable(msg.sender).transfer(address(this).balance);
}
   /**
   * @dev Function sets profile uri
   *  
   * 
   **/
  function setProfile(string calldata uri_) public {
     profiles[msg.sender] = uri_;
  }

   /**
   * @dev Function gets profile uri
   * @param profile address of profile to get
   * 
   **/
function getProfile(address profile) public view returns(string memory) {
  return(profiles[profile]);
}
 
   /**
   * @dev Function enable address to create events as a manager
   *  @param status of the manager false or true
   *  @param manager_ address to set as manager
   **/
  function setManager(bool status,address manager_) public onlyOwner {
     managers[manager_].isValue = status;
  }


 
  /* @dev Function allows contract to receive ERC1155 tokens 
   * 
   **/  
   function onERC1155Received(address, address, uint256, uint256, bytes memory) public virtual returns (bytes4) {
        return this.onERC1155Received.selector;
    }

   /* @dev Function allows contract to receive ERC1155 tokens 
   * 
   **/  
   function onERC1155BatchReceived(address, address, uint256[] memory, uint256[] memory, bytes memory) public virtual returns (bytes4) {
        return this.onERC1155BatchReceived.selector;
    }
}