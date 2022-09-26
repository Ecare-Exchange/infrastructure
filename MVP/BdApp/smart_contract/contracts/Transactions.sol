// SPDX-License-Identifier: ULICENSED

pragma solidity ^0.8.0;

contract Transactions {
    uint256 transactionCounter;

    event Transfer(
        address from,
        address receiver,
        uint amount,
        string message,
        uint timestamp,
        string keyword
    );

    

}