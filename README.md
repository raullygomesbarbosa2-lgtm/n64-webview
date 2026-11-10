# N64 WebView (experimental)

A separate Android WebView shell around **N64 Wasm** by Neil Barkhina (a web port of RetroArch's ParaLLEl N64 core). This is not an emulator implemented from scratch. This repository does not include games or BIOS files. Users must supply ROMs they are legally entitled to use.

## Current status

Experimental implementation; **not validated as a playable Android emulator**. No real N64 ROM was available for end-to-end testing, and no Android device/emulator run has been completed in this environment. Do not infer gameplay compatibility from a successful build alone. Build and emulator smoke-test workflow is included but hasn't run yet.

## Design

- Android Java WebView app, immersive landscape mode, WebGL-enabled system WebView, JavaScript and DOM storage.
- Uses Android's system document picker (`ACTION_OPEN_DOCUMENT`) to select a ROM in the upstream file input.
- Uses WebViewAssetLoader (`https://appassets.androidplatform.net`) so WebAssembly loads from a secure local origin rather than `file://`.
- Upstream browser frontend, WASM and JS are included locally; vendored UI dependencies mean normal emulator usage should not require network access. No network permission is declared, external navigation is blocked, and no remote ROM is configured.
- Upstream mobile touchscreen controls are provided by N64 Wasm (joystick and on-screen buttons); actual multi-touch behavior in Android WebView still needs device validation.

## Build

Open this directory as an Android Gradle project in Android Studio (JDK 17, Android SDK 35), or run `gradle assembleDebug`. The APK output is `app/build/outputs/apk/debug/app-debug.apk`. GitHub Actions workflow builds an APK and attempts a basic emulator launch/UI smoke test. That does not replace testing a ROM and controls.

## Test ROM and game test

No ROM is bundled. A suitable legally distributable N64 homebrew ROM has not yet been sourced and verified for a real game boot/input test. Add a verified test ROM only as a CI/test fixture with explicit author permission/license; never commit it in the app or distribute it with APK.

## Upstream and license notes

- N64 Wasm: https://github.com/nbarkhina/N64Wasm (upstream main archive imported for the included `dist` frontend/assets; revision was not pinned; the upstream README identifies MIT for its top-level project).
- N64 Wasm's core is based on ParaLLEl N64 and includes Mupen64Plus components. Not all upstream source is MIT: included source identifies Mupen64Plus-Core as GPL-2.0, ParaLLEl RSP components include LGPL/MIT materials, plus other bundled third-party code and font notices. Before redistributing this compiled WASM binary, perform a full component/license audit, preserve all required notices/source and meet copyleft obligations. See `THIRD_PARTY_NOTICES.md` and the preserved upstream source tree under `upstream/`.
- Android application shell is provided under MIT in `LICENSE`.

This code is experimental and is provided without a gameplay guarantee. N64 compatibility and performance depend on WebView's WebGL/WASM implementation and the device.
