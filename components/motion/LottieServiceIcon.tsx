"use client";

import * as React from "react";
import { Lottie } from "lottie-react";
import type { ServiceItem } from "@/data/portfolio";

type IconKind = ServiceItem["iconName"];

// Helper to construct a clean, lightweight 48x48 Lottie vector animation
function buildLottieData(
  shapes: Record<string, unknown>[],
  name: string
): Record<string, unknown> {
  return {
    v: "5.7.4",
    fr: 60,
    ip: 0,
    op: 60,
    w: 48,
    h: 48,
    nm: name,
    ddd: 0,
    assets: [],
    layers: [
      {
        ddd: 0,
        ind: 1,
        ty: 4,
        nm: "icon-layer",
        sr: 1,
        ks: {
          o: { a: 0, k: 100 },
          r: {
            a: 1,
            k: [
              { t: 0, s: [0], e: [6] },
              { t: 30, s: [6], e: [0] },
              { t: 60, s: [0] },
            ],
          },
          p: { a: 0, k: [24, 24, 0] },
          a: { a: 0, k: [24, 24, 0] },
          s: {
            a: 1,
            k: [
              { t: 0, s: [100, 100, 100], e: [108, 108, 100] },
              { t: 30, s: [108, 108, 100], e: [100, 100, 100] },
              { t: 60, s: [100, 100, 100] },
            ],
          },
        },
        ao: 0,
        shapes,
        ip: 0,
        op: 60,
        st: 0,
        bm: 0,
      },
    ],
  };
}

const CYAN_STROKE = {
  ty: "st",
  c: { a: 0, k: [0.024, 0.714, 0.831, 1] }, // #06B6D4
  o: { a: 0, k: 100 },
  w: { a: 0, k: 2.2 },
  lc: 2,
  lj: 2,
};

const WHITE_STROKE = {
  ty: "st",
  c: { a: 0, k: [0.945, 0.961, 0.976, 0.9] }, // #F1F5F9
  o: { a: 0, k: 100 },
  w: { a: 0, k: 2 },
  lc: 2,
  lj: 2,
};

const TRIM_ANIM = {
  ty: "tm",
  s: { a: 0, k: 0 },
  e: {
    a: 1,
    k: [
      { t: 0, s: [100], e: [40] },
      { t: 28, s: [40], e: [100] },
      { t: 60, s: [100] },
    ],
  },
  o: { a: 0, k: 0 },
  m: 1,
};

const LOTTIE_MAP: Record<IconKind, Record<string, unknown>> = {
  Layers: buildLottieData(
    [
      {
        ty: "gr",
        it: [
          {
            ty: "rc",
            p: { a: 0, k: [24, 16] },
            s: { a: 0, k: [24, 10] },
            r: { a: 0, k: 2 },
          },
          CYAN_STROKE,
          TRIM_ANIM,
          { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } },
        ],
      },
      {
        ty: "gr",
        it: [
          {
            ty: "rc",
            p: { a: 0, k: [24, 30] },
            s: { a: 0, k: [24, 10] },
            r: { a: 0, k: 2 },
          },
          WHITE_STROKE,
          { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } },
        ],
      },
    ],
    "web-layers"
  ),
  Smartphone: buildLottieData(
    [
      {
        ty: "gr",
        it: [
          {
            ty: "rc",
            p: { a: 0, k: [24, 24] },
            s: { a: 0, k: [18, 28] },
            r: { a: 0, k: 4 },
          },
          CYAN_STROKE,
          TRIM_ANIM,
          { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } },
        ],
      },
      {
        ty: "gr",
        it: [
          {
            ty: "el",
            p: { a: 0, k: [24, 33] },
            s: { a: 0, k: [3, 3] },
          },
          WHITE_STROKE,
          { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } },
        ],
      },
    ],
    "mobile-device"
  ),
  Building2: buildLottieData(
    [
      {
        ty: "gr",
        it: [
          {
            ty: "rc",
            p: { a: 0, k: [24, 24] },
            s: { a: 0, k: [24, 22] },
            r: { a: 0, k: 3 },
          },
          CYAN_STROKE,
          TRIM_ANIM,
          { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } },
        ],
      },
      {
        ty: "gr",
        it: [
          {
            ty: "rc",
            p: { a: 0, k: [24, 20] },
            s: { a: 0, k: [12, 6] },
            r: { a: 0, k: 1 },
          },
          WHITE_STROKE,
          { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } },
        ],
      },
    ],
    "enterprise-pos"
  ),
  ServerCog: buildLottieData(
    [
      {
        ty: "gr",
        it: [
          {
            ty: "rc",
            p: { a: 0, k: [24, 17] },
            s: { a: 0, k: [26, 9] },
            r: { a: 0, k: 2 },
          },
          CYAN_STROKE,
          TRIM_ANIM,
          { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } },
        ],
      },
      {
        ty: "gr",
        it: [
          {
            ty: "rc",
            p: { a: 0, k: [24, 31] },
            s: { a: 0, k: [26, 9] },
            r: { a: 0, k: 2 },
          },
          WHITE_STROKE,
          { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } },
        ],
      },
    ],
    "cloud-vps"
  ),
  Database: buildLottieData(
    [
      {
        ty: "gr",
        it: [
          {
            ty: "el",
            p: { a: 0, k: [24, 15] },
            s: { a: 0, k: [24, 8] },
          },
          CYAN_STROKE,
          TRIM_ANIM,
          { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } },
        ],
      },
      {
        ty: "gr",
        it: [
          {
            ty: "rc",
            p: { a: 0, k: [24, 26] },
            s: { a: 0, k: [24, 14] },
            r: { a: 0, k: 4 },
          },
          WHITE_STROKE,
          { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } },
        ],
      },
    ],
    "database-cyl"
  ),
  ShieldCheck: buildLottieData(
    [
      {
        ty: "gr",
        it: [
          {
            ty: "sr",
            sy: 2,
            pt: { a: 0, k: 6 },
            p: { a: 0, k: [24, 24] },
            r: { a: 0, k: 0 },
            or: { a: 0, k: 14 },
            os: { a: 0, k: 0 },
          },
          CYAN_STROKE,
          TRIM_ANIM,
          { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } },
        ],
      },
      {
        ty: "gr",
        it: [
          {
            ty: "el",
            p: { a: 0, k: [24, 24] },
            s: { a: 0, k: [10, 10] },
          },
          WHITE_STROKE,
          { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } },
        ],
      },
    ],
    "security-shield"
  ),
};

interface LottieServiceIconProps {
  type: IconKind;
  isHovered: boolean;
}

export function LottieServiceIcon({ type, isHovered }: LottieServiceIconProps) {
  return (
    <div className="h-7 w-7 flex items-center justify-center">
      <Lottie
        src={LOTTIE_MAP[type]}
        autoplay={isHovered}
        loop={isHovered}
        className="h-7 w-7"
      />
    </div>
  );
}
