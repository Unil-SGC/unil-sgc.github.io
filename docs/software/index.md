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
orgs:
  - title: JuliaGPU
    badge: [Julia, GPU]
    details: The Julia GPU ecosystem, with CUDA.jl, AMDGPU.jl, Metal.jl, oneAPI.jl and KernelAbstractions.jl, their documentation and tutorials.
    link: https://juliagpu.org
  - title: GPU4GEO
    badge: [PASC project]
    details: The PASC project on GPU-based multi-physics solvers for geosciences in Julia.
    link: https://gpu4geo.org
  - title: PTsolvers
    badge: [GitHub]
    details: Organisation of the pseudo-transient solvers, with applications and tutorials built on ParallelStencil.
    link: https://github.com/PTsolvers
  - title: JuliaGeodynamics
    badge: [GitHub]
    details: Organisation of Julia packages for geodynamics, such as GeoParams.jl and GeophysicalModelGenerator.jl.
    link: https://github.com/JuliaGeodynamics
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

<PageBanner light="/images/software-banner-light.png" dark="/images/software-banner-dark.png" alt="A scalar field on a computational grid, with a five-point stencil outlined" />

A succinct description and links to useful code repositories related to the activities of the Geocomputing Centre.

## Centre repositories

Tools, templates and material shared by the community are hosted on the [Unil-SGC GitHub organisation](https://github.com/Unil-SGC). The packaging repositories are the material of the [packaging workshop](/events/pkg-workshop).

<ResourceCards :items="$frontmatter.repos" />

## Julia GPU development

Where the GPU work of the Centre and its partners lives, from the Julia GPU ecosystem to the GPU4GEO project and its organisations.

<ResourceCards :items="$frontmatter.orgs" />

Building blocks used across these projects:

<ResourceCards compact :items="$frontmatter.blocks" />
