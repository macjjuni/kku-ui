"use strict";import{useId as o,useMemo as n}from"react";export function useCleanId(e){const r=o().replace(/[^a-zA-Z0-9-_]/g,"");return n(()=>`${e}-${r}`,[r,e])}
