// get access to the required classes, methods, functions, properties
const { CHAINPOUCH_ERROR, ChainError, TS, isvalidcurrency, Block, Chain } = require('../src/main.js');


describe('1. Block Class Scenario ....', () => {
  test('1.1 Test Case Block...', () => {
    let cp_block = new Block( '2024-3-2', { credit: '25.50', tid: 'A0001' });

    expect (cp_block).toBeInstanceOf(Block);
    expect (cp_block.ts).toBe('2024-3-2');
    expect (cp_block.tid).toBe('A0001');
    expect (cp_block.debitvalue).toEqual(0);
    expect (cp_block.creditvalue).toEqual(25.50);

    expect (cp_block.validtimestamp()).toBe(true);
    expect (cp_block.validtransaction()).toBe(true);

  });

  test('1.2 Test Case Chain...', () => {
    let cp_wallet = new Chain (); // create a new chain instance

    expect (cp_wallet).toBeInstanceOf(Chain);
    expect(() => cp_wallet.addblock( new Block( '2024-1-19', { credit: '25.50', tid: 'A0001' }) ) // add credit transaction
      .toThrow(ChainError));
    expect(() => cp_wallet.addblock( new Block( '2024-1-20', { debit: '5.50', tid: 'A0002' }) ) // add credit transaction
      .toThrow(ChainError));
    expect(() => cp_wallet.addblock( new Block( '2024-1-21', { credit: '25.50', tid: 'A0003' }) ) // add credit transaction
      .toThrow(ChainError));
    expect (cp_wallet.isvalid()).toBe(true);
    expect (cp_wallet.balance()).toBe('£0.00');

  });

});
