# 14 - Working with Public Data

How to use public datasets, archival APIs, and metadata-harvesting protocols without confusing "available" with "ready for production."

## The claim

Public data work fails less often because the API is hard and more often because the operator skips source discipline. A usable public-data workflow records four things before code exists:

1. Where the metadata came from.
2. Where the actual data lives.
3. What the access terms and rate limits are.
4. How the result will be attributed and refreshed.

If those four facts are missing, an agent can still write code, but it is probably automating confusion.

## The operating model

Use a four-layer workflow:

```text
source discovery
  -> metadata record
  -> sample retrieval
  -> repeatable ingest note
```

Do not start with a scraper. Start with a source note.

## Data.gov

Data.gov is a catalog, not a universal data warehouse. Its API page says the catalog is powered by CKAN and that the CKAN API contains metadata about datasets, including URLs and descriptions, but not the actual dataset payloads.

That distinction matters. A beginner task should not be "download data from Data.gov." It should be:

1. Find a catalog record.
2. Record the publisher.
3. Record the data dictionary or field notes if present.
4. Record the license, access, and update notes.
5. Find the actual resource URL.
6. Download only a small sample.

Useful starting point:

```text
https://catalog.data.gov/api/3/action/package_search?q=climate&rows=5
```

Treat the result as metadata. The useful fields are usually the dataset title, organization, notes, tags, resources, formats, and resource URLs.

## National Archives Catalog API

The National Archives Catalog API exposes public Catalog data in machine-readable JSON. The National Archives describes available data as including archival descriptions, authority records, digital-object metadata, extracted text such as OCR, and public contributions such as tags, transcriptions, and comments.

The important beginner constraints:

- API key required for requests.
- The default key is read-only.
- Do not publish the key in GitHub or any public repo.
- Default rate limit is 10,000 queries per month per API key.
- Do not scrape or attempt to download the full Catalog through the API; use the published bulk dataset path for full downloads.
- Apps using the API should not imply NARA endorsement.

For learning, keep the first task read-only:

```text
Goal: Search the National Archives Catalog API for one public topic and save a source note.

Constraints:
- Use a read-only key.
- Do not store the key in code.
- Do not download bulk data.
- Record the query, record id, title, source URL, and date reviewed.
```

## OAI-PMH

OAI-PMH is the Open Archives Initiative Protocol for Metadata Harvesting. The protocol defines a low-level HTTP/XML pattern where repositories expose metadata records and harvesters collect them.

The six protocol verbs are:

| Verb | Purpose |
|------|---------|
| `Identify` | Describe the repository |
| `ListMetadataFormats` | List available metadata formats |
| `ListSets` | List repository sets, if supported |
| `ListIdentifiers` | List record headers |
| `ListRecords` | List full metadata records |
| `GetRecord` | Fetch one metadata record |

The practical lesson is pagination. `ListRecords`, `ListIdentifiers`, and `ListSets` can return a `resumptionToken`. A harvester must use that token to request the next incomplete list segment and must handle expired or invalid tokens.

## ACP as a concrete OAI-PMH example

Atmospheric Chemistry and Physics publishes an OAI-PMH example page through Copernicus. It supports OAI-PMH 2.0, Dublin Core metadata (`oai_dc`), and full-text XML in NLM/PMC format for articles published after November 2014.

Example requests:

```text
https://oai-pmh.copernicus.org/oai.php?verb=Identify
https://oai-pmh.copernicus.org/oai.php?verb=ListSets
https://oai-pmh.copernicus.org/oai.php?verb=ListMetadataFormats
https://oai-pmh.copernicus.org/oai.php?verb=ListRecords&metadataPrefix=oai_dc
```

Use those examples to learn the protocol shape. Do not copy them into this site as live frontend calls.

## What to record in a source note

Use this template before implementation:

```md
# Source Note

Reviewed: YYYY-MM-DD
Source:
Publisher:
Access method:
Data or metadata:
License or access note:
Rate limit:
Pagination:
Attribution requirement:
Sample query:
Sample record:
Fields used:
Fields ignored:
Refresh expectation:
Risks:
```

This note is more important than the first script. It lets a coding agent work from facts rather than assumptions.

## Agent prompt

```text
Goal: Create a source note for one public dataset before writing any ingestion code.

Scope:
- Use one source only.
- Read the official documentation and one sample response.
- Do not build a scraper, database, backend, or frontend.

Constraints:
- Do not use secrets or private data.
- Do not download bulk data.
- Record rate limits, attribution, and pagination.
- Treat Data.gov catalog records as metadata unless the resource URL points to the actual data.

Verification:
- The note names the source URL, sample query, reviewed date, and whether the result is metadata or data.

Finish with:
- Source note path
- Unknowns
- Smallest safe next implementation step
```

## What this module does not cover

- Data cleaning at scale.
- Bulk archival downloads.
- Private or licensed datasets.
- Production ETL orchestration.
- Legal review of data licenses.

The first win is not ingestion. The first win is knowing what you are ingesting.
