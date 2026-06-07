# PWPlan Core Lab

How to separate a planning UI from identity by making the contract PII-free by construction.

## Source repo

[`Protocol-Wealth/pwplan-core`](https://github.com/Protocol-Wealth/pwplan-core)

PWPlan Core is a thin planning UI. The open-source contract accepts de-identified planning variables such as age, balances, allocations, filing status, and derived assumptions. It has no fields for name, date of birth, SSN, email, phone, or address.

## What to learn

The core pattern is a PII-free compute plane:

- The browser UI sends planning variables, not identity.
- Client-to-run correlation happens out of band through an opaque subject reference.
- The public/open path can target a PII-free engine.
- The private production path can map identity behind authentication before making server-to-server calls.
- A structural tripwire rejects identity-shaped keys before dispatch.

This is stronger than "remember not to paste PII." The contract makes identity impossible to express unless someone changes the schema.

## Contract invariant

Forbidden field names include:

```text
name, firstName, lastName, fullName, dob, dateOfBirth, ssn,
socialSecurityNumber, email, phone, phoneNumber, address, streetAddress
```

Allowed fields include derived planning inputs:

```text
currentAge, retirementAge, horizonAge, accounts, assetClasses,
filingStatus, annualSpend, guaranteedIncome, returnModel, paths
```

## Browser exercise

Use the Planning Contract Validator.

1. Start with the sample Monte Carlo payload.
2. Add `email` or `dateOfBirth`.
3. Confirm the validator fails.
4. Replace the identity field with a derived field such as `currentAge`.
5. Confirm the payload passes again.

## Codex or Claude task

```text
Read the PWPlan Core lab and the planning contract. Build a validator for one planning tool payload. It must reject identity-shaped keys anywhere in the object tree, check the contract version, and explain why age is allowed but date of birth is not.
```

## Review checklist

| Check | Pass/fail |
|-------|-----------|
| Contract version is explicit | |
| Identity-shaped keys fail anywhere in nested payloads | |
| The examples use fake or de-identified data | |
| Output explains the trust boundary | |
| No live planning API call is made from `pw-learnai` | |

## What this lab does not do

- It does not provide financial planning advice.
- It does not de-identify real client records.
- It does not implement the private `pw-api` mapping layer.
- It does not persist planning runs.
