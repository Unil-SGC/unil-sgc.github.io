---
title: Long-term storage
---

# Long-term storage

Research data at UNIL is stored on the DCSR NAS, operated by the Scientific Computing and Research Support Unit (DCSR). It has three tiers, described on the [research data storage pages of the UNIL wiki](https://wiki.unil.ch/ci/books/research-data-storage/page/general-information):

- **D2c** (data, 2 copies): active data during a project, with an off-site backup and daily snapshots kept for one month.
- **LTS** (long-term storage): archiving, typically at the end of a project. Data is kept for about a decade on tape and must be described with metadata when archived.
- **D1c** (data, 1 copy): reference data that can be downloaded again from its source. No backup, available on request only.

Sensitive data has its own path through Tresorit, also documented on the wiki.

## Requesting storage

The principal investigator of the project submits the request on the [DCSR request form](https://requests.dcsr.unil.ch). Once the DCSR has accepted it and the PI has granted you access, the share can be mounted from your laptop or, if you have cluster access, reached directly under `/nas`. For computations, copy data from the NAS to the fast cluster storage first.

## FGSE procedure

::: info In preparation
The FGSE-specific procedure for long-term storage, from what to archive and how to describe it to who to contact, is being worked out and will be published here. In the meantime, contact the Geocomputing Centre at sgc@unil.ch.
:::

## See also

- [Research data storage](https://wiki.unil.ch/ci/books/research-data-storage) on the UNIL wiki, including S3 storage and large file transfer.
- [Resources of the Centre](https://www.unil.ch/fgse/en/home/menuinst/recherche/geocomputing-centre/ressources.html) on unil.ch, which lists the DCSR storage and transfer services.
- [Shared datasets](/data/datasets) for the large reference datasets kept on Curnagl.
