---
title: Software
repos:
  - title: geocomputing-coffee
    badge: [Git]
    details: Material of the informal geocomputing coffee meet-ups, starting with a Git and GitHub demo.
    link: https://github.com/Unil-SGC/geocomputing-coffee
  - title: git-demo
    badge: [Git]
    details: Demo repository for a Git workflow.
    link: https://github.com/Unil-SGC/git-demo
  - title: python-packaging
    badge: [Python]
    details: Material of the packaging workshop, from a notebook to a package.
    link: https://github.com/Unil-SGC/python-packaging
  - title: julia-packaging
    badge: [Julia]
    details: Material of the packaging workshop, from a notebook to a package.
    link: https://github.com/Unil-SGC/julia-packaging
  - title: IceFlow.jl
    badge: [Julia]
    details: Shallow-ice-approximation routines used as the packaging example.
    link: https://github.com/Unil-SGC/IceFlow.jl
  - title: AGDA-Rbook
    badge: [R]
    details: Book for the course "Advanced geospatial data analysis".
    link: https://github.com/Unil-SGC/AGDA-Rbook
  - title: sgc-assets
    badge: [Assets]
    details: Logo and other assets of the Centre.
    link: https://github.com/Unil-SGC/sgc-assets
blocks:
  - title: ParallelStencil.jl
    badge: [Julia, GPU]
    details: High-level code for parallel high-performance stencil computations, deployable on both GPUs and CPUs.
    link: https://github.com/omlins/ParallelStencil.jl
  - title: ImplicitGlobalGrid.jl
    badge: [Julia, GPU]
    details: Almost trivial distributed parallelisation of stencil-based GPU and CPU applications on a regular staggered grid.
    link: https://github.com/eth-cscs/ImplicitGlobalGrid.jl
  - title: AMDGPU.jl
    badge: [Julia, GPU]
    details: AMD GPU (ROCm) programming in Julia.
    link: https://github.com/JuliaGPU/AMDGPU.jl
  - title: KernelAbstractions.jl
    badge: [Julia, GPU]
    details: Heterogeneous programming in Julia.
    link: https://github.com/JuliaGPU/KernelAbstractions.jl
---

# Software

A succinct description and links to useful code repositories related to the activities of the Geocomputing Centre.

## Centre repositories

Tools, templates and material shared by the community are hosted on the [Unil-SGC GitHub organisation](https://github.com/Unil-SGC). The packaging repositories are the material of the [packaging workshop](/events/pkg-workshop).

<ResourceCards :items="$frontmatter.repos" />

## Julia GPU development

Ongoing development related to the [GPU4GEO](https://gpu4geo.org) PASC project is hosted on the [PTsolvers](https://github.com/PTsolvers) and [JuliaGeodynamics](https://github.com/JuliaGeodynamics) organisations. Its building blocks:

<ResourceCards :items="$frontmatter.blocks" />
