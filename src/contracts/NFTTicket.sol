// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;
import "@openzeppelin/contracts-upgradeable/token/ERC1155/ERC1155Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

/**
 * @title NFTTicket Contract
 * @dev Contract to implement nfts for ticketing
 *   Allows for
 *   # Minting Tickets
 *   # Burning Tickets
 *   
 * @author Dominic Leon Hackett
 */


contract NFTTicket is ERC1155Upgradeable ,OwnableUpgradeable  {
     string public name ;
     string public symbol; 
    
     mapping  (uint256 =>string) _uri;
	 address minter;
	
/**
   * @dev Function allows for initilizing of Contract  
   * @param  _name Token name
   * @param  _symbol Token symbol
   * @param _minter Authorized minter address
   * @param metadataURI array of metadata for each class of tickets
   **/
     
 function initialize(string memory _name, string memory _symbol,address _minter,string[] memory metadataURI) public initializer  {
        minter = _minter;  
        name = _name;
        symbol = _symbol;
        uint256 index;
        for(index =0;index < metadataURI.length;index++)
         _uri[index+1] = metadataURI[0];
         
    }
	
	
 	 
 /**
   * @dev Function allows for the minting of NFTs  
   * @param To mint to address
   * @param id tokenId to mint
   * @param amount
   **/
	
	 
	 function mint(address To,uint256 id,uint256 amount) public{
	   require(msg.sender == minter,"Unauthorized minter.");
	   
       _mint( To, id, amount, "");
   
	  
     }

/**
   * @dev Function allows for the burning of NFTs  
   * @param From address to burn from
   * @param id tokenId to mint
   **/
	
	 
	 function burn(address From,uint256 id) public{
	   require(msg.sender == minter,"Unauthorized minter.");
	   
       _burn( From, id, 1);
   
	  
     }
	 

	 
	 /**
     * @dev Function returns tokenId URI
    * @param tokenId of NFT.
   **/
	
	 function uri(uint256 tokenId) public override view returns (string memory){
      return _uri[tokenId];
    }

   /**
   * @dev Function sets address that is allowed to mint
    * @param _minter only address allowed to mint NFTs.
   **/
	

    function setMinter(address _minter) external onlyOwner{
    minter = _minter;
  }
}