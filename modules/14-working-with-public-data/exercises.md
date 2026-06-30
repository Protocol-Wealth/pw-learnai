# Exercises - Working with Public Data

## Exercise 1: Data.gov source note

Use Data.gov's CKAN API to find one dataset.

Deliverable: `source-notes/datagov-<topic>.md`

Include:

- Catalog URL
- API query
- Dataset title
- Publisher
- Resource URLs
- File formats
- License or access notes
- Whether the catalog result contains data or only metadata
- One reason the dataset might be unsuitable

Do not download more than a small sample from a resource URL.

## Exercise 2: National Archives API source note

Read the National Archives Catalog API terms before writing code.

Deliverable: `source-notes/nara-catalog-api.md`

Include:

- Reviewed date
- API docs URL
- Whether an API key is required
- Default monthly rate limit
- Whether your planned use is read-only or write-capable
- Attribution or non-endorsement note
- One sample search you would run
- What you will not store in the repo

Do not commit an API key.

## Exercise 3: OAI-PMH reconnaissance

Use the ACP/Copernicus OAI-PMH examples.

Deliverable: `source-notes/oai-pmh-acp.md`

Record:

| Request | What it tells you |
|---------|-------------------|
| `Identify` | |
| `ListSets` | |
| `ListMetadataFormats` | |
| `ListRecords&metadataPrefix=oai_dc` | |
| `GetRecord` | |

Name which requests may require a `resumptionToken`.

## Exercise 4: Write the first safe implementation prompt

Write a Codex or Claude prompt that asks for a source-note generator, not a scraper.

It must include:

- One source only
- No secrets
- No backend
- No bulk download
- Output path
- Verification command or manual check

## Exercise 5: Decide when to deploy

Create a table:

| Condition | Deploy now? | Why |
|-----------|-------------|-----|
| Static source notes only | | |
| Browser-only sample parser | | |
| API key required | | |
| Scheduled refresh required | | |
| Private or regulated data | | |

The expected answer for private or regulated data is not "deploy faster." It is "design the trust boundary first."
