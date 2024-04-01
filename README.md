# Testing Code Tutorial Worksheet 2: Couch Pouch - A Complex Business Problem

The "Couch Pouch" project is your team’s first step in assessing how blockchain technology could help update traditional financial systems and create a digital ‘wallet’ platform, specifically in the recording and management of financial transactions. 

At its core, the project aims to help the individuals gain a deeper, more technical understanding of blockchain's potential benefits, including enhanced security, efficiency, and transparency.  Essentially, it is useful to think of a blockchain wallet like a digital keychain - in the real world, a keychain helps secure things you own, like your house or car. In the digital world of cryptocurrency, a blockchain wallet serves a similar purpose but for your digital money.

This investigation should help evaluate the practical, security, and performance of deploying blockchain for core financial transaction management and explore how this technology could improve traditional models by offering unparalleled transparency and security.  

Blockchain operates as a distributed ledger, recording transactions to help ensure a secure, transparent, and unalterable record. This structure not only minimises fraud and reduce possible transaction times but also provides a transparent and permanent transaction log.

Although the overall project should provide significant advancements and a potential need (later) to review challenges and obstacles such as blockchain scalability, regulatory adherence, privacy issues, and the upfront costs.  Your ‘current’ role (as software engineers) will be dedicated to the ensuring the quality of design and development, focusing solely on ensuring a robust codebase.


Your role is critical: review and test the initial codebase to ensure it meets the organisation’s requirements for financial transaction recording and management. You will assess the feasibility of incorporating blockchain into the financial product’s development by providing essential feedback on quality assurance, adoption viability, and areas needing further development, exploration and/or testing.

To setup your project, use the previous worksheet to initialise your project together the project’s initial source code.

--- 

### A 15 Min Review Presentation 
To complete this task, you are expected to briefly outline the purpose of testing before focusing on unit and integration tests supported with an understanding of a TDD or BDD approach to any associated user-based stories.  Your review is expected to be a live presentation (up to a max duration of 15mins). Ideally, demonstrating a walk-through of the project, test planning, test scripts and your test results; see the details below for an overall breakdown of the requirements; the presentation should include evidence of your actual project with explained and highlighted tests scripts, live testing and evaluated results (i.e., show and tell). Jest can be configured to create coverage information via a html document, use https://htmlpreview.github.io to view github hosted html documents; e.g., use the example address https://github.com/MWatkins-UH/chain-pouch-project/blob/main/chainpouch/tests/coverage/lcov-report/index.html

---

### Couch Pouch (Wallet) Blockchain Project – Business Rules and Requirements
Each block in a chain represents a valid transaction; a valid transaction must have a valid transaction type AND a unique transaction id (tid); transaction ids are used to prevent duplicate transactions being added to the chain.  Essentially, each chain is a virtual (CouchPouch) wallet (i.e., an online bank account where transactions (stored as added blocks) include amount values that will either be debited (deducted) or credited (added) to the wallet’s balance).

The initial codebase is designed to implement a basic blockchain mechanism to store financial debit and credit transactions (in the form of unsigned positive floating-point values, for example: 10.00, 20.02, etc). A transaction should be a valid JSON object in the form of: < { transaction_type : 'string_value', tid : 'alphanumeric' } >
  
#### For Example:
```javascript
{ credit: '10.00', tid: ‘1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed’ }
{ debit: '20.50', tid: ‘d617d6be-5b84-479f-aa17-3debb451cf52’ }
```
<p>&nbsp;</p>

#### Validating Transactions
* The agreed valid type for ‘credit’ is ‘credit’ (case sensitive, not including the quote marks).
* The agreed valid type for ‘debit is ‘debit’ (case sensitive, not including the quote marks).
* The agreed debit values are: > 0 and <= 1000.
* The agreed credit values are: > 0 and <= 10000.
* Transaction values of 0 should be rejected, i.e., not added to the chain.
* Transaction values of less than or exceeding 2 decimal places (e.g., 2.0, 3.999, etc) should be rejected.
* Transactions with an incorrect transaction_type (e.g., spelling, case, name, etc) should be rejected.
* Transactions without a unique transaction id (e.g., already exists (case insensitive) within the chain) should be rejected.

<p>&nbsp;</p>

#### Validating Timestamps
* Timestamps should be in ISO 8601 date format (i.e., YYYY-MM-DD)
* Timestamps with future dates should be rejected.
* Timestamps with past dates > 180 days should be rejected.
* Transactions with incorrect (or missing) dates should be rejected.  

<p>&nbsp;</p>

#### Instantiating A Chain Example:
```javascript
let cp_wallet = new Chain ();
cp_wallet.addblock( new Block( '2024-3-20', { credit: '25.50', tid: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed' }) )
```
<p>&nbsp;</p>

#### Creating globally unique identifiers (a.k.a., GUIDs)  
Research the node package ‘uuid’ methods to create globally unique id; example use:

```javascript
const { v4: uuidv4 } = require('uuid');
uuidv4(); // example return 1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed
```

This package should be installed via a package manager or directly using npm (‘npm i uuid’).  You could test using this package to create unique identifiers or create your own unique (or where useful) not unique identifiers by hand.
<p>&nbsp;</p>

### Couch Pouch Behaviours & Features ###
* **balance** – invoking this method returns the correct floating point (i.e., pound and pence) value currently stored in an account (chain); e.g., if a chain (not including the genesis block) has two blocks with the following credit transactional values 10.34 and 4.50 the returning balance should be 14.85.  If the chain has three blocks, a credit: 10.50, a debit: 15.25 and a credit: 8.75 the balance should be 4.00.  If the chain only has a genesis block the return value should be 0.  Depending on the transactional values positive and negative balances should be available.
* **validtransaction** – invoking this method must return true or false depending on whether the details (see validating transactions above) are valid; there are several possible combined business rules associated with this requirement that should be planned and included to help maximise test coverage.
* **rebuild** – invoking this development only method should rebuild the entire chain correcting any hash issues.

---

### Test Strategy Consideration and Planning 
Your strategy should include organised examples of:
* White and Black-box Testing
* Unit – individual methods and function testing
* Integration – individual and combined testing
* Regression Testing – rerunning functional tests
* Positive & Negative Tests – innovative testing plans for correctness, reliability, and robustness

    * Well Organised Unit Tests (e.g. Isolated function and method testing)
    * Well Organised Test Scenarios (e.g. Scenario 1: Create a New Couch Pouch Wallet)
    * Well Organised Test Cases (Associated with each unit and scenario)  
    * Well Organised and Considered Test Data (Data Used, Origin, Range, etc)
    * Well Organised and Structured Test Scripts (Complete and Comprehensive Scripts)
    * Well Implement and/or Refactored Features (Test Plans and/or Implemented Behaviours)

It is strongly suggested when planning you adopt a critical and innovative approach to testing; review any associated and/or helpful material for useful lists, ideas and strategies etc.  
<p>&nbsp;</p>

### Suggestion: 15 Min Presentation Guide
  
| Time| Topic |
| ----| ------- |
| 2m  | Project Outline (including team) Explain the purpose of Testing could include an introduction and overall purpose of testing, identify common testing issues, summarise your test plan (what will it be testing, how will it be testing, …), summary results (i.e., number and results re: test scenarios, cases, coverage). |
| 2m  | A technical discussion on general testing, e.g., an explanation of White & Black-box, Unit, Integration & Regression Testing, benefits, disadvantages, etc… |
| 2m  | Overall project testing strategy (e.g., how you prepared, planned, aims & objectives – how you organised your test data and evidence of critical and innovative consideration supported with a completed test log (i.e., MS Excel or Google sheet) |
| 2m  | A review on what assurance and quality planning is - explain the quality terms: Correctness, Reliability and Robustness highlighting how these attributes have been applied to your testing plan. |
| 2m  | White-Box Testing Review Actual unit, integration and regression test cases/scripts code coverage, results, and explanations |
| 2m  | Behaviours & Features test planning, TDD and results): ‘balance’, ‘validtransaction’, ‘rebuild’ |
| 2m  | Black-Box Testing Review (actual user-based stories, behavioural based scenarios, test cases/scripts code coverage, results, and evaluation: e.g., consider including error guessing, BVA, decision tables. |
| <1m | Wrap up (insights, reflections, innovations, findings etc) |
<p>&nbsp;</p>
  