# Third-party notices (initial inventory; not a completed redistribution audit)

## N64 Wasm

Copyright (c) 2021 Neil Barkhina. Upstream top-level `LICENSE` is MIT. Upstream project's README describes this as a port of RetroArch ParaLLEl N64 to WebAssembly. The upstream `dist/` JavaScript, WASM, CSS/HTML frontend and `assets.zip` were copied from the repository archive at the time this project was started; exact commit SHA was not captured. Original upstream source archive is retained at `upstream/N64Wasm-master/` for review.

## Important copyleft/asset notices

The included upstream source contains `code/src/mupen64plus-core/LICENSES`, which states Mupen64Plus-Core is GPL version 2; its GPL text is `code/src/mupen64plus-core/doc/gpl-license`. `mupen64plus-rsp-paraLLEl` includes MIT and LGPL license files, and `mupen64plus-video-paraLLEl/parallel-rdp/LICENSE` also needs inspection. More bundled components (SDL-related code, minizip, zlib, fonts and frontend JS libraries) carry separate terms. The generated WASM distribution may include linked code under these licenses. This inventory is incomplete. Do not treat the wrapper MIT license as granting rights over third-party components. Before public binary distribution, conduct a thorough license review and fulfill copyleft source/notices obligations; where feasible provide corresponding source for the exact WASM build or use upstream's source/build materials.

UI JS/CSS vendor files were downloaded from their listed official CDN URLs as seen in upstream `dist/index.html`: jQuery 3.3.1, Rivets 0.9.6, Popper 1.12.9, Bootstrap 4.0.0 JS/CSS, Toastr latest at fetch time (un-pinned), FileSaver 2.0.2 and nipplejs 0.10.0. This project has not yet collected individual license files for each vendor dependency; that is required before distribution.

No ROM or BIOS file is included.
