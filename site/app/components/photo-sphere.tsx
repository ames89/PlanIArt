"use client";

import React, { useRef, useState } from "react";
import {
  AutorotatePlugin,
  CubemapAdapter,
  GyroscopePlugin,
  MarkersPlugin,
  ReactPhotoSphereViewer,
} from "react-photo-sphere-viewer";
import QuienesSomos from "./quienes-somos";
import { Viewer } from "@photo-sphere-viewer/core";

const faces = {
  left: "",
  front: "",
  right: "",
  back: "",
  top: "",
  bottom: "",
};

export const PhotoSphere = () => {
  const handleReady = (instance: Viewer) => {
    const markersPlugs = instance.getPlugin<MarkersPlugin>(MarkersPlugin);
    if (!markersPlugs) return;
    markersPlugs.addEventListener("select-marker", (item) => {
      switch (item.marker.id) {
        case "instagram":
          window.location.href = "https://www.instagram.com/amoikacr";
      }
    });
  };

  return (
    <ReactPhotoSphereViewer
      src={faces as unknown as string}
      height="100%"
      width="100%"
      adapter={CubemapAdapter}
      defaultZoomLvl={0}
      plugins={[
        AutorotatePlugin,
        GyroscopePlugin,
        [
          MarkersPlugin,
          {
            markers: [
              {
                id: "image",
                position: { yaw: "0deg", pitch: "0deg" },
                image: "pin-red.png",
                anchor: "bottom center",
                size: { width: 64, height: 64 },
                tooltip: "Descubre quienes somos",
                content: QuienesSomos,
              },
              {
                id: "instagram",
                position: {
                  yaw: "0deg",
                  pitch: "-15deg",
                },
                image: "instagram_logo.svg",
                anchor: "bottom center",
                size: { width: 64, height: 64 },
                tooltip: "Accede a nuestro instagram",
              },
            ],
          },
        ],
      ]}
      navbar={["zoom", "gyroscope", "autorotate"]}
      onReady={handleReady}
    />
  );
};
