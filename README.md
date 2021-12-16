# Nuxt 3 Minimal Starter

We recommend to look at the [documentation](https://v3.nuxtjs.org).

## Primevue and PrimeBlocks problem with NUXT v3

I'm trying to use the new primevue and primeblocks with nuxt v3, but didn't work.

``
Nuxt CLI v3.0.0-27324955.23397e6 11:52:57
11:52:57

> Local: http://localhost:3000/
> Network: http://192.168.3.37:3000/

ℹ Vite warmed up in 884ms 11:53:01

WARN [SSR] Error transforming /pages/index.vue: [object Object] 11:53:04

✔ Vite server built in 3565ms 11:53:04
✔ Nitro built in 345 ms 11:53:05
[Vue Router warn]: uncaught error during route navigation:

ERROR [worker] Cannot read properties of undefined (reading '\_\_vccOpts') 11:53:07

at node_modules/vue-router/dist/vue-router.cjs.js:2022:55

ERROR [proxy] connect ENOENT /var/folders/f\_/hsd5pc8j5k94x4_wx41t0m_00000gn/T/nitro/worker-5874-1.sock 11:53:08

at PipeConnectWrap.afterConnect [as oncomplete] (node:net:1161:16)

ERROR [proxy] connect ENOENT /var/folders/f\_/hsd5pc8j5k94x4_wx41t0m_00000gn/T/nitro/worker-5874-1.sock 11:53:09

at PipeConnectWrap.afterConnect [as oncomplete] (node:net:1161:16)
``
