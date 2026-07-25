# Shard Core Lab

How authenticated encryption, threshold recovery, and human ceremony fit into an agent system without becoming an all-purpose secret store.

## Source repo

[`Protocol-Wealth/shard-core`](https://github.com/Protocol-Wealth/shard-core)

`shard-core` protects sensitive bytes and recovery phrases with authenticated encryption, Shamir threshold recovery, and fail-closed file handling.

Reviewed against the public README on 2026-07-25.

> Security boundary: the current `0.2.0rc1` release is a prerelease and has not received an independent security audit. Tests and AI-assisted review are not a security audit. Use synthetic material for evaluation.

## The cryptographic shape

```text
plaintext
   |
   +--> random data-encryption key (DEK)
            |
            +--> ChaCha20-Poly1305 ciphertext
            |
            +--> Shamir key shares

each protected artifact = one key share + the authenticated ciphertext
```

The plaintext is not Shamir-split. The data-encryption key is split, and the reconstructed key must pass AEAD authentication. That makes a wrong or corrupt share combination fail closed instead of producing plausible garbage.

## Where it belongs

| Use | Fit |
| --- | --- |
| Offline recovery ceremony for synthetic bytes | In scope for this lab |
| Rehearsing holder roles, manifests, corruption, and recovery | In scope |
| Approved sensitive bytes or a real recovery phrase | Outside this curriculum; requires independent cryptographic review, approved threat model, validated ceremony, and accountable risk acceptance |
| Agent session memory | Not in scope |
| Live API-key broker for an SDK | Not in scope |
| Automatic agent access to production secrets | Not in scope |
| Substitute for a managed secret manager or HSM | Not established by this repo |
| Proof of independent cryptographic assurance | Not in scope |

## Agent-system boundary

An agent should not silently invoke recovery.

```text
agent proposes a recovery task
    |
    v
human confirms purpose, holders, threshold, destination, and offline boundary
    |
    v
operator runs shard-core outside the agent's normal writable workspace
    |
    v
human verifies result and removes temporary plaintext according to procedure
```

The useful integration is the ceremony and receipt, not direct secret access.

## Safety defaults worth studying

- Explicit output or deliberate stdout is required for sensitive recovery.
- Existing outputs are refused unless overwrite is explicit.
- Final-component symlinks are refused.
- Multi-file output is preflighted before writes.
- New secret files and private directories use restrictive modes.
- Conflicting or ambiguous share sets fail.
- Recovery work is bounded.
- Manifests contain artifact hashes and set metadata, not plaintext hashes.

These controls still assume a trusted host and controlled parent directories.

## Offline exercise

Do this only in a separate `shard-core` clone with synthetic text:

1. Create a file containing `synthetic recovery rehearsal only`.
2. Protect it as a 2-of-3 set.
3. Verify the complete set.
4. Recover with shares 1 and 3.
5. Compare the recovered bytes.
6. Corrupt a copy of one share and confirm the workflow fails or selects a valid bounded combination as documented.
7. Record which holder, storage, transport, and incident assumptions were not exercised.

Do not place real recovery phrases, client data, private keys, API keys, or production credentials in the exercise.

## Human ceremony artifact

Fill this in for the synthetic rehearsal. A completed table is not approval for non-synthetic use.

| Decision | Owner | Evidence |
| --- | --- | --- |
| Asset being protected | | |
| Threats in scope | | |
| Threshold and share count | | |
| Holder independence | | |
| Storage locations | | |
| Transport method | | |
| Recovery authorization | | |
| Trusted recovery host | | |
| Plaintext cleanup | | |
| Rehearsal frequency | | |
| Incident and revocation plan | | |
| Independent security review | | |

## Review checklist

| Check | Pass/fail |
| --- | --- |
| Material is synthetic | |
| Pre-release and audit status is visible | |
| AEAD and Shamir roles are described correctly | |
| Agent cannot autonomously recover or print secrets | |
| Output path and overwrite behavior are explicit | |
| Holder roles and recovery authorization are named | |
| Trusted-host assumption is recorded | |
| Recovery is rehearsed before relying on it | |

## What this lab does not do

- It does not execute cryptography in the browser.
- It does not ask for real sensitive material.
- It does not certify `shard-core` for production.
- It does not make threshold shares a replacement for identity, authorization, backup policy, or incident response.
- It does not connect recovery material to Claude, Codex, MCP, or semantic memory.
