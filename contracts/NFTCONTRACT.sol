pragma solidity 0.8.0;
// import ERC1155 token contract from openzapplin
// We are not gonna implement all the functionalies of this contract,we implement the most important functionalies.
// import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC1155/ERC1155.sol";
import "../node_modules/@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
// D:\NOTES\Project4_ERC1155\node_modules\@openzeppelin\contracts\token\ERC1155
// import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol";
import "../node_modules/@openzeppelin/contracts/access/Ownable.sol";
contract NFTCONTRACT is ERC1155,Ownable{
    // First we are to defined the list of the items we want to have.
    uint256 public constant ARTWORK=0;
    uint256 public constant PHOTO=1;
    // string private constant basuURI=".json";
    //   function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
    //     string memory baseExtension=".json";
    //     string memory baseURI = _baseURI();
    //     return bytes(baseURI).length > 0 ? string(abi.encodePacked(baseURI, tokenId.toString(),baseExtension)) : "";
    // }
    // These are gonna be used for internal use they are gonna be used for internal usage.
    constructor() ERC1155(" https://frbkmm492ton.bigmoralis.com/{id}.json"){
        _mint(msg.sender,ARTWORK,1,"");
        _mint(msg.sender,PHOTO,2,"");
    }
    function mint( address account,uint256 id,uint256 amount) public onlyOwner() {
// We need to make sure that only the can call this function.we can require statement or use onable contract from openzeppelin

        _mint(account,id,amount,"");
    }
    function burn(address account, uint256 id,uint256 amount) public {
        require(msg.sender==account);
        _burn(account,id,amount);
    }
}