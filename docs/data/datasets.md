---
title: Shared datasets
---

<script setup>
import { data as datasets } from '../.vitepress/reference.data.ts'
</script>

# Shared datasets

Large datasets of interest to several research groups of the FGSE, such as ERA5, MeteoSwiss products and others, can be stored on and accessed from the `/reference` partition of the Curnagl cluster, operated by the DCSR (central UNIL IT). Storing a dataset there once avoids each group keeping its own copy, and access is not billed to the groups.

## Available datasets

The datasets live in the `FGSE` folder of `/reference` on Curnagl. The list below is the README of that folder, as last synced to this site; the README on the cluster also gives a contact person for each dataset.

<ResourceCards compact :items="datasets" />

## Requesting a dataset

To add a dataset of interest to several groups, or to get access to an existing one, contact the Geocomputing Centre at sgc@unil.ch. More details on the procedure will follow.
