---
title: Compute
resources:
  - icon: 🐙
    title: Octopus
    badge: [FGSE, GPU]
    details: The faculty's own GPU cluster, with no scheduler and direct access to the nodes. How-to for access, etiquette and setup.
    link: /compute/octopus
  - icon: 🖥️
    title: DCSR clusters
    badge: [UNIL, HPC]
    details: UNIL's central HPC clusters, including one for sensitive data, plus virtual workstations and servers for research.
    link: https://www.unil.ch/ci/dcsr-en
  - icon: 🏔️
    title: CSCS
    badge: [National, HPC]
    details: The Swiss National Supercomputing Centre. Resources are allocated through calls.
    link: https://www.cscs.ch
support:
  - icon: 🧑‍💻
    title: FGSE HPC support
    badge: [FGSE, Free]
    details: Flavio Calvo and Margot Sirdey. Write to research-computing-fgse@unil.ch or come to the weekly drop-in session (Geopolis 4631).
    link: https://wiki.unil.ch/ci/books/research-support/page/high-performance-computing
  - icon: 🏛️
    title: DCSR
    badge: [UNIL]
    details: UNIL's Scientific Computing and Research Support Unit. Computing and storage resources, and expertise from HPC programming to full-stack development.
    link: https://www.unil.ch/ci/dcsr-en
  - icon: 🧭
    title: Geocomputing Centre
    badge: [FGSE]
    details: Questions on FGSE compute resources and coordination go to sgc@unil.ch.
    link: mailto:sgc@unil.ch
---

# Compute

<PageBanner light="/images/compute-banner-light.webp" dark="/images/compute-banner-dark.webp" alt="Status LEDs and network cables of a switch" />

GPU and HPC resources for FGSE researchers, and how to get support.

## Resources

<ResourceCards />

## Support

<ResourceCards :items="$frontmatter.support" />

The FGSE research computing team helps for free on a wide range of topics, and collaborations in mid- and long-term projects are encouraged:

- adapting code to the HPC infrastructure: parallelisation, optimisation, benchmarking
- designing and implementing numerical schemes and algorithms
- using the DCSR infrastructure: running on the cluster or on virtual machines, data storage
- automating data post-processing pipelines
- refactoring code in view of public sharing
- applying for computing time at HPC centres such as CSCS
