// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract DocumentRegistry {

    struct Document {
        string documentHash;
        address owner;
        uint256 timestamp;
    }

    Document[] private documents;

    event DocumentStored(
        string documentHash,
        address owner,
        uint256 timestamp
    );

    function storeDocument(string memory _hash) public {
        documents.push(
            Document({
                documentHash: _hash,
                owner: msg.sender,
                timestamp: block.timestamp
            })
        );

        emit DocumentStored(
            _hash,
            msg.sender,
            block.timestamp
        );
    }

    function getDocument(uint256 index)
        public
        view
        returns (
            string memory,
            address,
            uint256
        )
    {
        Document memory doc = documents[index];

        return (
            doc.documentHash,
            doc.owner,
            doc.timestamp
        );
    }

    function totalDocuments() public view returns (uint256) {
        return documents.length;
    }
}
