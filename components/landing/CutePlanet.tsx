"use client"
import * as THREE from 'three'
import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useSpring, animated, config } from "@react-spring/three"

type GLTFResult = GLTF & {
  nodes: {
    Sail_Front004_Sail_Boat_Sail_0: THREE.Mesh
    Sail_Rear004_Sail_Boat_Sail_0: THREE.Mesh
    Mast004_Sail_Boat_Wood_0: THREE.Mesh
    Boat004_Sail_Boat_Wood_0: THREE.Mesh
    Boat003_Sail_Boat_Wood_0: THREE.Mesh
    Mast003_Sail_Boat_Wood_0: THREE.Mesh
    Sail_Rear003_Sail_Boat_Sail_0: THREE.Mesh
    Sail_Front003_Sail_Boat_Sail_0: THREE.Mesh
    Sail_Front002_Sail_Boat_Sail_0: THREE.Mesh
    Sail_Rear002_Sail_Boat_Sail_0: THREE.Mesh
    Mast002_Sail_Boat_Wood_0: THREE.Mesh
    Boat002_Sail_Boat_Wood_0: THREE.Mesh
    Boat001_Sail_Boat_Wood_0: THREE.Mesh
    Mast001_Sail_Boat_Wood_0: THREE.Mesh
    Sail_Rear001_Sail_Boat_Sail_0: THREE.Mesh
    Sail_Front001_Sail_Boat_Sail_0: THREE.Mesh
    Sail_Front_Sail_Boat_Sail_0: THREE.Mesh
    Sail_Rear_Sail_Boat_Sail_0: THREE.Mesh
    Mast_Sail_Boat_Wood_0: THREE.Mesh
    Boat_Sail_Boat_Wood_0: THREE.Mesh
    Snow_Chimney005_House_Chimney_0: THREE.Mesh
    Snow_Chimney005_Snow_0: THREE.Mesh
    Snow_Roof004_Snow_0: THREE.Mesh
    Snow_Roof004_House_Roof_0: THREE.Mesh
    Snow_Base005_House_Chimney_0: THREE.Mesh
    Snow_Base005_House_0: THREE.Mesh
    Snow_Base005_House_Door_0: THREE.Mesh
    Snow_Base004_House_Chimney_0: THREE.Mesh
    Snow_Base004_House_0: THREE.Mesh
    Snow_Base004_House_Door_0: THREE.Mesh
    Snow_Roof003_Snow_0: THREE.Mesh
    Snow_Roof003_House_Roof_0: THREE.Mesh
    Snow_Chimney004_House_Chimney_0: THREE.Mesh
    Snow_Chimney004_Snow_0: THREE.Mesh
    Snow_Chimney003_House_Chimney_0: THREE.Mesh
    Snow_Chimney003_Snow_0: THREE.Mesh
    Snow_Roof002_Snow_0: THREE.Mesh
    Snow_Roof002_House_Roof_0: THREE.Mesh
    Snow_Base003_House_Chimney_0: THREE.Mesh
    Snow_Base003_House_0: THREE.Mesh
    Snow_Base003_House_Door_0: THREE.Mesh
    Snow_Base002_House_Chimney_0: THREE.Mesh
    Snow_Base002_House_0: THREE.Mesh
    Snow_Base002_House_Door_0: THREE.Mesh
    Snow_Roof001_Snow_0: THREE.Mesh
    Snow_Roof001_House_Roof_0: THREE.Mesh
    Snow_Chimney002_House_Chimney_0: THREE.Mesh
    Snow_Chimney002_Snow_0: THREE.Mesh
    Snow_Base001_House_Chimney_0: THREE.Mesh
    Snow_Base001_House_0: THREE.Mesh
    Snow_Base001_House_Door_0: THREE.Mesh
    Snow_Roof000_Snow_0: THREE.Mesh
    Snow_Roof000_House_Roof_0: THREE.Mesh
    Snow_Chimney001_House_Chimney_0: THREE.Mesh
    Snow_Chimney001_Snow_0: THREE.Mesh
    Snow_Chimney000_House_Chimney_0: THREE.Mesh
    Snow_Chimney000_Snow_0: THREE.Mesh
    Snow_Roof008_Snow_0: THREE.Mesh
    Snow_Roof008_House_Roof_0: THREE.Mesh
    Snow_Base000_House_Chimney_0: THREE.Mesh
    Snow_Base000_House_0: THREE.Mesh
    Snow_Base000_House_Door_0: THREE.Mesh
    Snow_Pine024_Tree_Bark_0: THREE.Mesh
    Snow_Pine024_Tree_Leaves_0: THREE.Mesh
    Snow_Pine024_Snow_0: THREE.Mesh
    Snow_Pine023_Tree_Bark_0: THREE.Mesh
    Snow_Pine023_Tree_Leaves_0: THREE.Mesh
    Snow_Pine023_Snow_0: THREE.Mesh
    Snow_Pine022_Tree_Bark_0: THREE.Mesh
    Snow_Pine022_Tree_Leaves_0: THREE.Mesh
    Snow_Pine022_Snow_0: THREE.Mesh
    Snow_Pine021_Tree_Bark_0: THREE.Mesh
    Snow_Pine021_Tree_Leaves_0: THREE.Mesh
    Snow_Pine021_Snow_0: THREE.Mesh
    Snow_Pine020_Tree_Bark_0: THREE.Mesh
    Snow_Pine020_Tree_Leaves_0: THREE.Mesh
    Snow_Pine020_Snow_0: THREE.Mesh
    Snow_Pine019_Tree_Bark_0: THREE.Mesh
    Snow_Pine019_Tree_Leaves_0: THREE.Mesh
    Snow_Pine019_Snow_0: THREE.Mesh
    Snow_Pine018_Tree_Bark_0: THREE.Mesh
    Snow_Pine018_Tree_Leaves_0: THREE.Mesh
    Snow_Pine018_Snow_0: THREE.Mesh
    Snow_Pine017_Tree_Bark_0: THREE.Mesh
    Snow_Pine017_Tree_Leaves_0: THREE.Mesh
    Snow_Pine017_Snow_0: THREE.Mesh
    Snow_Pine016_Tree_Bark_0: THREE.Mesh
    Snow_Pine016_Tree_Leaves_0: THREE.Mesh
    Snow_Pine016_Snow_0: THREE.Mesh
    Snow_Pine015_Tree_Bark_0: THREE.Mesh
    Snow_Pine015_Tree_Leaves_0: THREE.Mesh
    Snow_Pine015_Snow_0: THREE.Mesh
    Snow_Pine014_Tree_Bark_0: THREE.Mesh
    Snow_Pine014_Tree_Leaves_0: THREE.Mesh
    Snow_Pine014_Snow_0: THREE.Mesh
    Snow_Pine013_Tree_Bark_0: THREE.Mesh
    Snow_Pine013_Tree_Leaves_0: THREE.Mesh
    Snow_Pine013_Snow_0: THREE.Mesh
    Snow_Pine012_Tree_Bark_0: THREE.Mesh
    Snow_Pine012_Tree_Leaves_0: THREE.Mesh
    Snow_Pine012_Snow_0: THREE.Mesh
    Snow_Pine011_Tree_Bark_0: THREE.Mesh
    Snow_Pine011_Tree_Leaves_0: THREE.Mesh
    Snow_Pine011_Snow_0: THREE.Mesh
    Snow_Pine010_Tree_Bark_0: THREE.Mesh
    Snow_Pine010_Tree_Leaves_0: THREE.Mesh
    Snow_Pine010_Snow_0: THREE.Mesh
    Snow_Pine009_Tree_Bark_0: THREE.Mesh
    Snow_Pine009_Tree_Leaves_0: THREE.Mesh
    Snow_Pine009_Snow_0: THREE.Mesh
    Snow_Pine008_Tree_Bark_0: THREE.Mesh
    Snow_Pine008_Tree_Leaves_0: THREE.Mesh
    Snow_Pine008_Snow_0: THREE.Mesh
    Snow_Pine007_Tree_Bark_0: THREE.Mesh
    Snow_Pine007_Tree_Leaves_0: THREE.Mesh
    Snow_Pine007_Snow_0: THREE.Mesh
    Snow_Pine006_Tree_Bark_0: THREE.Mesh
    Snow_Pine006_Tree_Leaves_0: THREE.Mesh
    Snow_Pine006_Snow_0: THREE.Mesh
    Snow_Pine005_Tree_Bark_0: THREE.Mesh
    Snow_Pine005_Tree_Leaves_0: THREE.Mesh
    Snow_Pine005_Snow_0: THREE.Mesh
    Snow_Pine004_Tree_Bark_0: THREE.Mesh
    Snow_Pine004_Tree_Leaves_0: THREE.Mesh
    Snow_Pine004_Snow_0: THREE.Mesh
    Snow_Pine003_Tree_Bark_0: THREE.Mesh
    Snow_Pine003_Tree_Leaves_0: THREE.Mesh
    Snow_Pine003_Snow_0: THREE.Mesh
    Snow_Pine002_Tree_Bark_0: THREE.Mesh
    Snow_Pine002_Tree_Leaves_0: THREE.Mesh
    Snow_Pine002_Snow_0: THREE.Mesh
    Snow_Pine001_Tree_Bark_0: THREE.Mesh
    Snow_Pine001_Tree_Leaves_0: THREE.Mesh
    Snow_Pine001_Snow_0: THREE.Mesh
    Snow_Pine000_Tree_Bark_0: THREE.Mesh
    Snow_Pine000_Tree_Leaves_0: THREE.Mesh
    Snow_Pine000_Snow_0: THREE.Mesh
    Object_291: THREE.SkinnedMesh
    Object_292: THREE.SkinnedMesh
    Object_294: THREE.SkinnedMesh
    Object_295: THREE.SkinnedMesh
    Object_297: THREE.SkinnedMesh
    Object_298: THREE.SkinnedMesh
    Object_300: THREE.SkinnedMesh
    Object_301: THREE.SkinnedMesh
    Object_303: THREE.SkinnedMesh
    Object_304: THREE.SkinnedMesh
    Object_306: THREE.SkinnedMesh
    Object_307: THREE.SkinnedMesh
    Object_309: THREE.SkinnedMesh
    Object_310: THREE.SkinnedMesh
    Object_312: THREE.SkinnedMesh
    Object_313: THREE.SkinnedMesh
    Object_315: THREE.SkinnedMesh
    Object_316: THREE.SkinnedMesh
    Object_318: THREE.SkinnedMesh
    Object_319: THREE.SkinnedMesh
    Object_321: THREE.SkinnedMesh
    Object_322: THREE.SkinnedMesh
    Object_324: THREE.SkinnedMesh
    Object_325: THREE.SkinnedMesh
    Object_327: THREE.SkinnedMesh
    Object_328: THREE.SkinnedMesh
    Object_330: THREE.SkinnedMesh
    Object_331: THREE.SkinnedMesh
    Object_333: THREE.SkinnedMesh
    Object_334: THREE.SkinnedMesh
    Object_336: THREE.SkinnedMesh
    Object_337: THREE.SkinnedMesh
    Object_339: THREE.SkinnedMesh
    Object_340: THREE.SkinnedMesh
    Object_342: THREE.SkinnedMesh
    Object_343: THREE.SkinnedMesh
    Object_345: THREE.SkinnedMesh
    Object_346: THREE.SkinnedMesh
    Object_348: THREE.SkinnedMesh
    Object_349: THREE.SkinnedMesh
    Object_351: THREE.SkinnedMesh
    Object_352: THREE.SkinnedMesh
    Object_354: THREE.SkinnedMesh
    Object_355: THREE.SkinnedMesh
    Object_357: THREE.SkinnedMesh
    Object_358: THREE.SkinnedMesh
    Object_360: THREE.SkinnedMesh
    Object_361: THREE.SkinnedMesh
    Object_363: THREE.SkinnedMesh
    Object_364: THREE.SkinnedMesh
    Object_366: THREE.SkinnedMesh
    Object_367: THREE.SkinnedMesh
    Object_369: THREE.SkinnedMesh
    Object_370: THREE.SkinnedMesh
    Object_372: THREE.SkinnedMesh
    Object_373: THREE.SkinnedMesh
    Object_375: THREE.SkinnedMesh
    Object_376: THREE.SkinnedMesh
    Object_378: THREE.SkinnedMesh
    Object_379: THREE.SkinnedMesh
    Cone246_Tree_Leaves_0: THREE.Mesh
    Cone246_Tree_Bark_0: THREE.Mesh
    Cylinder080_Tree_Leaves_0: THREE.Mesh
    Cylinder080_Tree_Bark_0: THREE.Mesh
    Cone240_Tree_Leaves_0: THREE.Mesh
    Cone240_Tree_Bark_0: THREE.Mesh
    Cone239_Tree_Leaves_0: THREE.Mesh
    Cone239_Tree_Bark_0: THREE.Mesh
    Cone236_Tree_Leaves_0: THREE.Mesh
    Cone236_Tree_Bark_0: THREE.Mesh
    Cone233_Tree_Leaves_0: THREE.Mesh
    Cone233_Tree_Bark_0: THREE.Mesh
    Cone228_Tree_Leaves_0: THREE.Mesh
    Cone228_Tree_Bark_0: THREE.Mesh
    Cone227_Tree_Leaves_0: THREE.Mesh
    Cone227_Tree_Bark_0: THREE.Mesh
    Cone222_Tree_Leaves_0: THREE.Mesh
    Cone222_Tree_Bark_0: THREE.Mesh
    Cone221_Tree_Leaves_0: THREE.Mesh
    Cone221_Tree_Bark_0: THREE.Mesh
    Cone216_Tree_Leaves_0: THREE.Mesh
    Cone216_Tree_Bark_0: THREE.Mesh
    Cone215_Tree_Leaves_0: THREE.Mesh
    Cone215_Tree_Bark_0: THREE.Mesh
    Cone210_Tree_Leaves_0: THREE.Mesh
    Cone210_Tree_Bark_0: THREE.Mesh
    Cone209_Tree_Leaves_0: THREE.Mesh
    Cone209_Tree_Bark_0: THREE.Mesh
    Cone204_Tree_Leaves_0: THREE.Mesh
    Cone204_Tree_Bark_0: THREE.Mesh
    Cone203_Tree_Leaves_0: THREE.Mesh
    Cone203_Tree_Bark_0: THREE.Mesh
    Cone198_Tree_Leaves_0: THREE.Mesh
    Cone198_Tree_Bark_0: THREE.Mesh
    Cone197_Tree_Leaves_0: THREE.Mesh
    Cone197_Tree_Bark_0: THREE.Mesh
    Cone192_Tree_Leaves_0: THREE.Mesh
    Cone192_Tree_Bark_0: THREE.Mesh
    Cone191_Tree_Leaves_0: THREE.Mesh
    Cone191_Tree_Bark_0: THREE.Mesh
    Cone186_Tree_Leaves_0: THREE.Mesh
    Cone186_Tree_Bark_0: THREE.Mesh
    Cone185_Tree_Leaves_0: THREE.Mesh
    Cone185_Tree_Bark_0: THREE.Mesh
    Cone180_Tree_Leaves_0: THREE.Mesh
    Cone180_Tree_Bark_0: THREE.Mesh
    Cone179_Tree_Leaves_0: THREE.Mesh
    Cone179_Tree_Bark_0: THREE.Mesh
    Cone174_Tree_Leaves_0: THREE.Mesh
    Cone174_Tree_Bark_0: THREE.Mesh
    Cone173_Tree_Leaves_0: THREE.Mesh
    Cone173_Tree_Bark_0: THREE.Mesh
    Cone168_Tree_Leaves_0: THREE.Mesh
    Cone168_Tree_Bark_0: THREE.Mesh
    Cone167_Tree_Leaves_0: THREE.Mesh
    Cone167_Tree_Bark_0: THREE.Mesh
    Cone162_Tree_Leaves_0: THREE.Mesh
    Cone162_Tree_Bark_0: THREE.Mesh
    Cone161_Tree_Leaves_0: THREE.Mesh
    Cone161_Tree_Bark_0: THREE.Mesh
    Cone156_Tree_Leaves_0: THREE.Mesh
    Cone156_Tree_Bark_0: THREE.Mesh
    Cone155_Tree_Leaves_0: THREE.Mesh
    Cone155_Tree_Bark_0: THREE.Mesh
    Cone150_Tree_Leaves_0: THREE.Mesh
    Cone150_Tree_Bark_0: THREE.Mesh
    Cone149_Tree_Leaves_0: THREE.Mesh
    Cone149_Tree_Bark_0: THREE.Mesh
    Cone144_Tree_Leaves_0: THREE.Mesh
    Cone144_Tree_Bark_0: THREE.Mesh
    Cone143_Tree_Leaves_0: THREE.Mesh
    Cone143_Tree_Bark_0: THREE.Mesh
    Cone140_Tree_Leaves_0: THREE.Mesh
    Cone140_Tree_Bark_0: THREE.Mesh
    Cone135_Tree_Leaves_0: THREE.Mesh
    Cone135_Tree_Bark_0: THREE.Mesh
    Cone132_Tree_Leaves_0: THREE.Mesh
    Cone132_Tree_Bark_0: THREE.Mesh
    Cone131_Tree_Leaves_0: THREE.Mesh
    Cone131_Tree_Bark_0: THREE.Mesh
    Cone126_Tree_Leaves_0: THREE.Mesh
    Cone126_Tree_Bark_0: THREE.Mesh
    Cone125_Tree_Leaves_0: THREE.Mesh
    Cone125_Tree_Bark_0: THREE.Mesh
    Cone120_Tree_Leaves_0: THREE.Mesh
    Cone120_Tree_Bark_0: THREE.Mesh
    Cone119_Tree_Leaves_0: THREE.Mesh
    Cone119_Tree_Bark_0: THREE.Mesh
    Cone114_Tree_Leaves_0: THREE.Mesh
    Cone114_Tree_Bark_0: THREE.Mesh
    Cone113_Tree_Leaves_0: THREE.Mesh
    Cone113_Tree_Bark_0: THREE.Mesh
    Cone108_Tree_Leaves_0: THREE.Mesh
    Cone108_Tree_Bark_0: THREE.Mesh
    Cone107_Tree_Leaves_0: THREE.Mesh
    Cone107_Tree_Bark_0: THREE.Mesh
    Cone102_Tree_Leaves_0: THREE.Mesh
    Cone102_Tree_Bark_0: THREE.Mesh
    Cone101_Tree_Leaves_0: THREE.Mesh
    Cone101_Tree_Bark_0: THREE.Mesh
    Cone098_Tree_Leaves_0: THREE.Mesh
    Cone098_Tree_Bark_0: THREE.Mesh
    Cone093_Tree_Leaves_0: THREE.Mesh
    Cone093_Tree_Bark_0: THREE.Mesh
    Cone092_Tree_Leaves_0: THREE.Mesh
    Cone092_Tree_Bark_0: THREE.Mesh
    Cone087_Tree_Leaves_0: THREE.Mesh
    Cone087_Tree_Bark_0: THREE.Mesh
    Cone084_Tree_Leaves_0: THREE.Mesh
    Cone084_Tree_Bark_0: THREE.Mesh
    Cone083_Tree_Leaves_0: THREE.Mesh
    Cone083_Tree_Bark_0: THREE.Mesh
    Cone078_Tree_Leaves_0: THREE.Mesh
    Cone078_Tree_Bark_0: THREE.Mesh
    Cone077_Tree_Leaves_0: THREE.Mesh
    Cone077_Tree_Bark_0: THREE.Mesh
    Cone072_Tree_Leaves_0: THREE.Mesh
    Cone072_Tree_Bark_0: THREE.Mesh
    Cone071_Tree_Leaves_0: THREE.Mesh
    Cone071_Tree_Bark_0: THREE.Mesh
    Cone066_Tree_Leaves_0: THREE.Mesh
    Cone066_Tree_Bark_0: THREE.Mesh
    Cone065_Tree_Leaves_0: THREE.Mesh
    Cone065_Tree_Bark_0: THREE.Mesh
    Cone060_Tree_Leaves_0: THREE.Mesh
    Cone060_Tree_Bark_0: THREE.Mesh
    Cone059_Tree_Leaves_0: THREE.Mesh
    Cone059_Tree_Bark_0: THREE.Mesh
    Cone054_Tree_Leaves_0: THREE.Mesh
    Cone054_Tree_Bark_0: THREE.Mesh
    Cone053_Tree_Leaves_0: THREE.Mesh
    Cone053_Tree_Bark_0: THREE.Mesh
    Cone032_Tree_Leaves_0: THREE.Mesh
    Cone032_Tree_Bark_0: THREE.Mesh
    Cone027_Tree_Leaves_0: THREE.Mesh
    Cone027_Tree_Bark_0: THREE.Mesh
    Cone048_Tree_Leaves_0: THREE.Mesh
    Cone048_Tree_Bark_0: THREE.Mesh
    Cone047_Tree_Leaves_0: THREE.Mesh
    Cone047_Tree_Bark_0: THREE.Mesh
    Cone042_Tree_Leaves_0: THREE.Mesh
    Cone042_Tree_Bark_0: THREE.Mesh
    Cone041_Tree_Leaves_0: THREE.Mesh
    Cone041_Tree_Bark_0: THREE.Mesh
    Cone036_Tree_Leaves_0: THREE.Mesh
    Cone036_Tree_Bark_0: THREE.Mesh
    Cone035_Tree_Leaves_0: THREE.Mesh
    Cone035_Tree_Bark_0: THREE.Mesh
    Cylinder007_Tree_Leaves_0: THREE.Mesh
    Cylinder007_Tree_Bark_0: THREE.Mesh
    Cone021_Tree_Leaves_0: THREE.Mesh
    Cone021_Tree_Bark_0: THREE.Mesh
    Cone018_Tree_Leaves_0: THREE.Mesh
    Cone018_Tree_Bark_0: THREE.Mesh
    Cylinder004_Tree_Leaves_0: THREE.Mesh
    Cylinder004_Tree_Bark_0: THREE.Mesh
    Cone012_Tree_Leaves_0: THREE.Mesh
    Cone012_Tree_Bark_0: THREE.Mesh
    Cone011_Tree_Leaves_0: THREE.Mesh
    Cone011_Tree_Bark_0: THREE.Mesh
    Cone006_Tree_Leaves_0: THREE.Mesh
    Cone006_Tree_Bark_0: THREE.Mesh
    Cone005_Tree_Leaves_0: THREE.Mesh
    Cone005_Tree_Bark_0: THREE.Mesh
    Base019_House_0: THREE.Mesh
    Base019_House_Door_0: THREE.Mesh
    Base018_House_0: THREE.Mesh
    Base018_House_Door_0: THREE.Mesh
    Base017_House_0: THREE.Mesh
    Base017_House_Door_0: THREE.Mesh
    Base016_House_0: THREE.Mesh
    Base016_House_Door_0: THREE.Mesh
    Base015_House_0: THREE.Mesh
    Base015_House_Door_0: THREE.Mesh
    Base014_House_0: THREE.Mesh
    Base014_House_Door_0: THREE.Mesh
    Base013_House_0: THREE.Mesh
    Base013_House_Door_0: THREE.Mesh
    Base012_House_0: THREE.Mesh
    Base012_House_Door_0: THREE.Mesh
    Base011_House_0: THREE.Mesh
    Base011_House_Door_0: THREE.Mesh
    Base010_House_0: THREE.Mesh
    Base010_House_Door_0: THREE.Mesh
    Base009_House_0: THREE.Mesh
    Base009_House_Door_0: THREE.Mesh
    Base008_House_0: THREE.Mesh
    Base008_House_Door_0: THREE.Mesh
    Chimney007_House_Chimney_0: THREE.Mesh
    Roof007_House_Roof_0: THREE.Mesh
    Base007_House_0: THREE.Mesh
    Base007_House_Door_0: THREE.Mesh
    Base006_House_0: THREE.Mesh
    Base006_House_Door_0: THREE.Mesh
    Roof006_House_Roof_0: THREE.Mesh
    Chimney006_House_Chimney_0: THREE.Mesh
    Chimney005_House_Chimney_0: THREE.Mesh
    Roof005_House_Roof_0: THREE.Mesh
    Base005_House_0: THREE.Mesh
    Base005_House_Door_0: THREE.Mesh
    Chimney004_House_Chimney_0: THREE.Mesh
    Roof004_House_Roof_0: THREE.Mesh
    Base004_House_0: THREE.Mesh
    Base004_House_Door_0: THREE.Mesh
    Base003_House_0: THREE.Mesh
    Base003_House_Door_0: THREE.Mesh
    Roof003_House_Roof_0: THREE.Mesh
    Chimney003_House_Chimney_0: THREE.Mesh
    Chimney002_House_Chimney_0: THREE.Mesh
    Roof002_House_Roof_0: THREE.Mesh
    Base002_House_0: THREE.Mesh
    Base002_House_Door_0: THREE.Mesh
    Base001_House_0: THREE.Mesh
    Base001_House_Door_0: THREE.Mesh
    Roof001_House_Roof_0: THREE.Mesh
    Chimney001_House_Chimney_0: THREE.Mesh
    Chimney_House_Chimney_0: THREE.Mesh
    Roof_House_Roof_0: THREE.Mesh
    Base_House_0: THREE.Mesh
    Base_House_Door_0: THREE.Mesh
    Building010_Skyscraper_0: THREE.Mesh
    Building010_SkyscraperWindow_0: THREE.Mesh
    Building009_Skyscraper_0: THREE.Mesh
    Building009_SkyscraperWindow_0: THREE.Mesh
    Building008_Skyscraper_0: THREE.Mesh
    Building008_SkyscraperWindow_0: THREE.Mesh
    Building007_Skyscraper_0: THREE.Mesh
    Building007_SkyscraperWindow_0: THREE.Mesh
    Building006_Skyscraper_0: THREE.Mesh
    Building006_SkyscraperWindow_0: THREE.Mesh
    Building005_Skyscraper_0: THREE.Mesh
    Building005_SkyscraperWindow_0: THREE.Mesh
    Building004_Skyscraper_0: THREE.Mesh
    Building004_SkyscraperWindow_0: THREE.Mesh
    Building003_Skyscraper_0: THREE.Mesh
    Building003_SkyscraperWindow_0: THREE.Mesh
    Building002_Skyscraper_0: THREE.Mesh
    Building002_SkyscraperWindow_0: THREE.Mesh
    Building001_Skyscraper_0: THREE.Mesh
    Building001_SkyscraperWindow_0: THREE.Mesh
    Building_Skyscraper_0: THREE.Mesh
    Building_SkyscraperWindow_0: THREE.Mesh
    Cube002_Bridge_0: THREE.Mesh
    Cube002_Rope_0: THREE.Mesh
    Cube001_Bridge_0: THREE.Mesh
    Cube001_Rope_0: THREE.Mesh
    Cube_Bridge_0: THREE.Mesh
    Cube_Rope_0: THREE.Mesh
    Cone002_Pyramid_0: THREE.Mesh
    Cone001_Pyramid_0: THREE.Mesh
    Cone003_Pyramid_0: THREE.Mesh
    Planet_Snow_0: THREE.Mesh
    Planet_Grass_0: THREE.Mesh
    Planet_Water_0: THREE.Mesh
    Planet_Sand_0: THREE.Mesh
    Planet_MountainMid_0: THREE.Mesh
    Planet_MountainNorth_0: THREE.Mesh
    Planet_MountainMidTop_0: THREE.Mesh
    Planet_Asphalt_0: THREE.Mesh
    Material_Cube_Asphalt_0: THREE.Mesh
    _rootJoint: THREE.Bone
  }
  materials: {
    Sail_Boat_Sail: THREE.MeshStandardMaterial
    Sail_Boat_Wood: THREE.MeshStandardMaterial
    House_Chimney: THREE.MeshStandardMaterial
    Snow: THREE.MeshStandardMaterial
    House_Roof: THREE.MeshStandardMaterial
    House: THREE.MeshStandardMaterial
    House_Door: THREE.MeshStandardMaterial
    Tree_Bark: THREE.MeshStandardMaterial
    Tree_Leaves: THREE.MeshStandardMaterial
    Palm_Tree_Leaves: THREE.MeshStandardMaterial
    Palm_Tree: THREE.MeshStandardMaterial
    Skyscraper: THREE.MeshStandardMaterial
    SkyscraperWindow: THREE.MeshStandardMaterial
    Bridge: THREE.MeshStandardMaterial
    Rope: THREE.MeshStandardMaterial
    Pyramid: THREE.MeshStandardMaterial
    Grass: THREE.MeshStandardMaterial
    Water: THREE.MeshStandardMaterial
    Sand: THREE.MeshStandardMaterial
    MountainMid: THREE.MeshStandardMaterial
    MountainNorth: THREE.MeshStandardMaterial
    MountainMidTop: THREE.MeshStandardMaterial
    Asphalt: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

type ActionName = 'Rotate'
interface GLTFAction extends THREE.AnimationClip {
  name: ActionName
}
type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh'] | JSX.IntrinsicElements['skinnedMesh'] | JSX.IntrinsicElements['bone']>>

export const CuteModel = forwardRef((props: any, ref: any) => {
  const group = useRef() as any
  const { nodes, materials, animations } = useGLTF('/models/cute_little_planet/scene.gltf') as GLTFResult
  const { actions } = useAnimations(animations, group) as any
  // play animation
  React.useEffect(() => {
    actions["Rotate"].play()
  }, [actions])

  // * invoke
  const [scale, setScale] = useState(0)
  const { scale_value } = useSpring({
    scale_value: scale,
    config: config.wobbly,
  }) as any
  useImperativeHandle(ref as any, () => ({
    invoke() {
      setScale(0.023)
    },
  }))

  return (
    <group ref={group} {...props} dispose={null}>
      <animated.mesh scale={scale_value}>
        <group name="Sketchfab_Scene">
          <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
            <group name="7df932a62feb4fc69a7a980f840439fbfbx" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Object_2">
                <group name="RootNode">
                  <group name="RotateMe" rotation={[-Math.PI / 2, 0, 0.682]} scale={100}>
                    <group name="000_Sail_Boats">
                      <group name="Sail_Boat_Parent004" rotation={[1.974, 0.303, -1.698]}>
                        <group name="Sail_Boat_Object004" position={[0, 0, 0.995]} rotation={[0, 0, 0.492]} scale={0.017}>
                          <group name="Sail_Front004" rotation={[-Math.PI, -1.571, 0]} scale={2.969}>
                            <mesh name="Sail_Front004_Sail_Boat_Sail_0" geometry={nodes.Sail_Front004_Sail_Boat_Sail_0.geometry} material={materials.Sail_Boat_Sail} />
                          </group>
                          <group name="Sail_Rear004" position={[0, -2.975, 4.006]} rotation={[0, 1.571, 0]} scale={2.969}>
                            <mesh name="Sail_Rear004_Sail_Boat_Sail_0" geometry={nodes.Sail_Rear004_Sail_Boat_Sail_0.geometry} material={materials.Sail_Boat_Sail} />
                          </group>
                          <group name="Mast004" position={[0, 0, 3.637]} scale={[0.7, 0.7, 1]}>
                            <mesh name="Mast004_Sail_Boat_Wood_0" geometry={nodes.Mast004_Sail_Boat_Wood_0.geometry} material={materials.Sail_Boat_Wood} />
                          </group>
                          <group name="Boat004" rotation={[-Math.PI / 2, 0, 0]}>
                            <mesh name="Boat004_Sail_Boat_Wood_0" geometry={nodes.Boat004_Sail_Boat_Wood_0.geometry} material={materials.Sail_Boat_Wood} />
                          </group>
                        </group>
                      </group>
                      <group name="Sail_Boat_Parent003" rotation={[1.262, -1.121, -1.851]}>
                        <group name="Sail_Boat_Object003" position={[0, 0, 0.995]} rotation={[0, 0, -1.913]} scale={0.017}>
                          <group name="Boat003" rotation={[-Math.PI / 2, 0, 0]}>
                            <mesh name="Boat003_Sail_Boat_Wood_0" geometry={nodes.Boat003_Sail_Boat_Wood_0.geometry} material={materials.Sail_Boat_Wood} />
                          </group>
                          <group name="Mast003" position={[0, 0, 3.637]} scale={[0.7, 0.7, 1]}>
                            <mesh name="Mast003_Sail_Boat_Wood_0" geometry={nodes.Mast003_Sail_Boat_Wood_0.geometry} material={materials.Sail_Boat_Wood} />
                          </group>
                          <group name="Sail_Rear003" position={[0, -2.975, 4.006]} rotation={[0, 1.571, 0]} scale={2.969}>
                            <mesh name="Sail_Rear003_Sail_Boat_Sail_0" geometry={nodes.Sail_Rear003_Sail_Boat_Sail_0.geometry} material={materials.Sail_Boat_Sail} />
                          </group>
                          <group name="Sail_Front003" rotation={[-Math.PI, -1.571, 0]} scale={2.969}>
                            <mesh name="Sail_Front003_Sail_Boat_Sail_0" geometry={nodes.Sail_Front003_Sail_Boat_Sail_0.geometry} material={materials.Sail_Boat_Sail} />
                          </group>
                        </group>
                      </group>
                      <group name="Sail_Boat_Parent002" rotation={[-2.47, -0.775, 0.848]}>
                        <group name="Sail_Boat_Object002" position={[0, 0, 0.995]} rotation={[0, 0, -2.44]} scale={0.017}>
                          <group name="Sail_Front002" rotation={[-Math.PI, -1.571, 0]} scale={2.969}>
                            <mesh name="Sail_Front002_Sail_Boat_Sail_0" geometry={nodes.Sail_Front002_Sail_Boat_Sail_0.geometry} material={materials.Sail_Boat_Sail} />
                          </group>
                          <group name="Sail_Rear002" position={[0, -2.975, 4.006]} rotation={[0, 1.571, 0]} scale={2.969}>
                            <mesh name="Sail_Rear002_Sail_Boat_Sail_0" geometry={nodes.Sail_Rear002_Sail_Boat_Sail_0.geometry} material={materials.Sail_Boat_Sail} />
                          </group>
                          <group name="Mast002" position={[0, 0, 3.637]} scale={[0.7, 0.7, 1]}>
                            <mesh name="Mast002_Sail_Boat_Wood_0" geometry={nodes.Mast002_Sail_Boat_Wood_0.geometry} material={materials.Sail_Boat_Wood} />
                          </group>
                          <group name="Boat002" rotation={[-Math.PI / 2, 0, 0]}>
                            <mesh name="Boat002_Sail_Boat_Wood_0" geometry={nodes.Boat002_Sail_Boat_Wood_0.geometry} material={materials.Sail_Boat_Wood} />
                          </group>
                        </group>
                      </group>
                      <group name="Sail_Boat_Parent001" rotation={[-1.203, 0.266, 1.47]}>
                        <group name="Sail_Boat_Object001" position={[0, 0, 0.995]} rotation={[0, 0, 2.796]} scale={0.023}>
                          <group name="Boat001" rotation={[-Math.PI / 2, 0, 0]}>
                            <mesh name="Boat001_Sail_Boat_Wood_0" geometry={nodes.Boat001_Sail_Boat_Wood_0.geometry} material={materials.Sail_Boat_Wood} />
                          </group>
                          <group name="Mast001" position={[0, 0, 3.637]} scale={[0.7, 0.7, 1]}>
                            <mesh name="Mast001_Sail_Boat_Wood_0" geometry={nodes.Mast001_Sail_Boat_Wood_0.geometry} material={materials.Sail_Boat_Wood} />
                          </group>
                          <group name="Sail_Rear001" position={[0, -2.975, 4.006]} rotation={[0, 1.571, 0]} scale={2.969}>
                            <mesh name="Sail_Rear001_Sail_Boat_Sail_0" geometry={nodes.Sail_Rear001_Sail_Boat_Sail_0.geometry} material={materials.Sail_Boat_Sail} />
                          </group>
                          <group name="Sail_Front001" rotation={[-Math.PI, -1.571, 0]} scale={2.969}>
                            <mesh name="Sail_Front001_Sail_Boat_Sail_0" geometry={nodes.Sail_Front001_Sail_Boat_Sail_0.geometry} material={materials.Sail_Boat_Sail} />
                          </group>
                        </group>
                      </group>
                      <group name="Sail_Boat_Parent000" rotation={[1.656, 1.194, -1.65]}>
                        <group name="Sail_Boat_Object000" position={[0, 0, 0.995]} rotation={[0, 0, -1.04]} scale={0.015}>
                          <group name="Sail_Front" rotation={[-Math.PI, -Math.PI / 2, 0]} scale={2.969}>
                            <mesh name="Sail_Front_Sail_Boat_Sail_0" geometry={nodes.Sail_Front_Sail_Boat_Sail_0.geometry} material={materials.Sail_Boat_Sail} />
                          </group>
                          <group name="Sail_Rear" position={[0, -2.975, 4.006]} rotation={[0, Math.PI / 2, 0]} scale={2.969}>
                            <mesh name="Sail_Rear_Sail_Boat_Sail_0" geometry={nodes.Sail_Rear_Sail_Boat_Sail_0.geometry} material={materials.Sail_Boat_Sail} />
                          </group>
                          <group name="Mast" position={[0, 0, 3.637]} scale={[0.7, 0.7, 1]}>
                            <mesh name="Mast_Sail_Boat_Wood_0" geometry={nodes.Mast_Sail_Boat_Wood_0.geometry} material={materials.Sail_Boat_Wood} />
                          </group>
                          <group name="Boat" rotation={[-Math.PI / 2, 0, 0]}>
                            <mesh name="Boat_Sail_Boat_Wood_0" geometry={nodes.Boat_Sail_Boat_Wood_0.geometry} material={materials.Sail_Boat_Wood} />
                          </group>
                        </group>
                      </group>
                    </group>
                    <group name="000_Snow_Houses">
                      <group name="Snow_House_Parent005" rotation={[0.268, 0, 1.571]}>
                        <group name="Snow_House005" position={[0, 0, 1.028]} rotation={[0, 0, 0.008]} scale={0.001}>
                          <group name="Snow_Chimney005" position={[15.986, -18.991, 75.734]} rotation={[0, 0, -1.459]} scale={[6.885, 6.885, 13.77]}>
                            <mesh name="Snow_Chimney005_House_Chimney_0" geometry={nodes.Snow_Chimney005_House_Chimney_0.geometry} material={materials.House_Chimney} />
                            <mesh name="Snow_Chimney005_Snow_0" geometry={nodes.Snow_Chimney005_Snow_0.geometry} material={materials.Snow} />
                          </group>
                          <group name="Snow_Roof004" position={[0, 0, 64.25]} rotation={[Math.PI / 2, 0.112, 0]} scale={[22.714, 13.114, 22.95]}>
                            <mesh name="Snow_Roof004_Snow_0" geometry={nodes.Snow_Roof004_Snow_0.geometry} material={materials.Snow} />
                            <mesh name="Snow_Roof004_House_Roof_0" geometry={nodes.Snow_Roof004_House_Roof_0.geometry} material={materials.House_Roof} />
                          </group>
                          <group name="Snow_Base005" position={[0, 0, 27.54]} rotation={[0, 0, -1.459]} scale={[34.424, 27.539, 27.539]}>
                            <mesh name="Snow_Base005_House_Chimney_0" geometry={nodes.Snow_Base005_House_Chimney_0.geometry} material={materials.House_Chimney} />
                            <mesh name="Snow_Base005_House_0" geometry={nodes.Snow_Base005_House_0.geometry} material={materials.House} />
                            <mesh name="Snow_Base005_House_Door_0" geometry={nodes.Snow_Base005_House_Door_0.geometry} material={materials.House_Door} />
                          </group>
                        </group>
                      </group>
                      <group name="Snow_House_Parent004" rotation={[0.196, 0.377, 2.647]}>
                        <group name="Snow_House004" position={[0, 0, 1.015]} rotation={[0, 0, 0.315]} scale={0.001}>
                          <group name="Snow_Base004" position={[0, 0, 27.539]} rotation={[0, 0, -1.459]} scale={[34.424, 27.539, 27.539]}>
                            <mesh name="Snow_Base004_House_Chimney_0" geometry={nodes.Snow_Base004_House_Chimney_0.geometry} material={materials.House_Chimney} />
                            <mesh name="Snow_Base004_House_0" geometry={nodes.Snow_Base004_House_0.geometry} material={materials.House} />
                            <mesh name="Snow_Base004_House_Door_0" geometry={nodes.Snow_Base004_House_Door_0.geometry} material={materials.House_Door} />
                          </group>
                          <group name="Snow_Roof003" position={[0, 0, 64.249]} rotation={[Math.PI / 2, 0.112, 0]} scale={[22.714, 13.114, 22.95]}>
                            <mesh name="Snow_Roof003_Snow_0" geometry={nodes.Snow_Roof003_Snow_0.geometry} material={materials.Snow} />
                            <mesh name="Snow_Roof003_House_Roof_0" geometry={nodes.Snow_Roof003_House_Roof_0.geometry} material={materials.House_Roof} />
                          </group>
                          <group name="Snow_Chimney004" position={[15.986, -18.991, 75.733]} rotation={[0, 0, -1.459]} scale={[6.885, 6.885, 13.77]}>
                            <mesh name="Snow_Chimney004_House_Chimney_0" geometry={nodes.Snow_Chimney004_House_Chimney_0.geometry} material={materials.House_Chimney} />
                            <mesh name="Snow_Chimney004_Snow_0" geometry={nodes.Snow_Chimney004_Snow_0.geometry} material={materials.Snow} />
                          </group>
                        </group>
                      </group>
                      <group name="Snow_House_Parent003" rotation={[-0.157, 0.25, -2.572]}>
                        <group name="Snow_House003" position={[0, 0, 1.015]} rotation={[0, 0, -0.124]} scale={0.001}>
                          <group name="Snow_Chimney003" position={[15.986, -18.991, 75.733]} rotation={[0, 0, -1.459]} scale={[6.885, 6.885, 13.77]}>
                            <mesh name="Snow_Chimney003_House_Chimney_0" geometry={nodes.Snow_Chimney003_House_Chimney_0.geometry} material={materials.House_Chimney} />
                            <mesh name="Snow_Chimney003_Snow_0" geometry={nodes.Snow_Chimney003_Snow_0.geometry} material={materials.Snow} />
                          </group>
                          <group name="Snow_Roof002" position={[0, 0, 64.249]} rotation={[Math.PI / 2, 0.112, 0]} scale={[22.714, 13.114, 22.95]}>
                            <mesh name="Snow_Roof002_Snow_0" geometry={nodes.Snow_Roof002_Snow_0.geometry} material={materials.Snow} />
                            <mesh name="Snow_Roof002_House_Roof_0" geometry={nodes.Snow_Roof002_House_Roof_0.geometry} material={materials.House_Roof} />
                          </group>
                          <group name="Snow_Base003" position={[0, 0, 27.539]} rotation={[0, 0, -1.459]} scale={[34.424, 27.539, 27.539]}>
                            <mesh name="Snow_Base003_House_Chimney_0" geometry={nodes.Snow_Base003_House_Chimney_0.geometry} material={materials.House_Chimney} />
                            <mesh name="Snow_Base003_House_0" geometry={nodes.Snow_Base003_House_0.geometry} material={materials.House} />
                            <mesh name="Snow_Base003_House_Door_0" geometry={nodes.Snow_Base003_House_Door_0.geometry} material={materials.House_Door} />
                          </group>
                        </group>
                      </group>
                      <group name="Snow_House_Parent002" rotation={[-0.329, 0.06, -1.745]}>
                        <group name="Snow_House002" position={[0, 0, 1.015]} rotation={[0, 0, -0.124]} scale={0.001}>
                          <group name="Snow_Base002" position={[0, 0, 27.539]} rotation={[0, 0, -1.459]} scale={[34.424, 27.539, 27.539]}>
                            <mesh name="Snow_Base002_House_Chimney_0" geometry={nodes.Snow_Base002_House_Chimney_0.geometry} material={materials.House_Chimney} />
                            <mesh name="Snow_Base002_House_0" geometry={nodes.Snow_Base002_House_0.geometry} material={materials.House} />
                            <mesh name="Snow_Base002_House_Door_0" geometry={nodes.Snow_Base002_House_Door_0.geometry} material={materials.House_Door} />
                          </group>
                          <group name="Snow_Roof001" position={[0, 0, 64.25]} rotation={[Math.PI / 2, 0.112, 0]} scale={[22.714, 13.114, 22.95]}>
                            <mesh name="Snow_Roof001_Snow_0" geometry={nodes.Snow_Roof001_Snow_0.geometry} material={materials.Snow} />
                            <mesh name="Snow_Roof001_House_Roof_0" geometry={nodes.Snow_Roof001_House_Roof_0.geometry} material={materials.House_Roof} />
                          </group>
                          <group name="Snow_Chimney002" position={[15.986, -18.991, 75.733]} rotation={[0, 0, -1.459]} scale={[6.885, 6.885, 13.77]}>
                            <mesh name="Snow_Chimney002_House_Chimney_0" geometry={nodes.Snow_Chimney002_House_Chimney_0.geometry} material={materials.House_Chimney} />
                            <mesh name="Snow_Chimney002_Snow_0" geometry={nodes.Snow_Chimney002_Snow_0.geometry} material={materials.Snow} />
                          </group>
                        </group>
                      </group>
                      <group name="Snow_House_Parent001" rotation={[-0.274, -0.283, -0.788]}>
                        <group name="Snow_House001" position={[0, 0, 1.009]} scale={0.001}>
                          <group name="Snow_Base001" position={[0, 0, 27.539]} rotation={[0, 0, -1.459]} scale={[34.424, 27.539, 27.539]}>
                            <mesh name="Snow_Base001_House_Chimney_0" geometry={nodes.Snow_Base001_House_Chimney_0.geometry} material={materials.House_Chimney} />
                            <mesh name="Snow_Base001_House_0" geometry={nodes.Snow_Base001_House_0.geometry} material={materials.House} />
                            <mesh name="Snow_Base001_House_Door_0" geometry={nodes.Snow_Base001_House_Door_0.geometry} material={materials.House_Door} />
                          </group>
                          <group name="Snow_Roof000" position={[0, 0, 64.25]} rotation={[Math.PI / 2, 0.112, 0]} scale={[22.714, 13.114, 22.95]}>
                            <mesh name="Snow_Roof000_Snow_0" geometry={nodes.Snow_Roof000_Snow_0.geometry} material={materials.Snow} />
                            <mesh name="Snow_Roof000_House_Roof_0" geometry={nodes.Snow_Roof000_House_Roof_0.geometry} material={materials.House_Roof} />
                          </group>
                          <group name="Snow_Chimney001" position={[15.986, -18.991, 75.733]} rotation={[0, 0, -1.459]} scale={[6.885, 6.885, 13.77]}>
                            <mesh name="Snow_Chimney001_House_Chimney_0" geometry={nodes.Snow_Chimney001_House_Chimney_0.geometry} material={materials.House_Chimney} />
                            <mesh name="Snow_Chimney001_Snow_0" geometry={nodes.Snow_Chimney001_Snow_0.geometry} material={materials.Snow} />
                          </group>
                        </group>
                      </group>
                      <group name="Snow_House_Parent000" rotation={[-0.035, -0.244, -0.145]}>
                        <group name="Snow_House000" position={[0, 0, 1.023]} rotation={[0, 0, -0.178]} scale={0.001}>
                          <group name="Snow_Chimney000" position={[15.986, -18.991, 75.733]} rotation={[0, 0, -1.459]} scale={[6.885, 6.885, 13.77]}>
                            <mesh name="Snow_Chimney000_House_Chimney_0" geometry={nodes.Snow_Chimney000_House_Chimney_0.geometry} material={materials.House_Chimney} />
                            <mesh name="Snow_Chimney000_Snow_0" geometry={nodes.Snow_Chimney000_Snow_0.geometry} material={materials.Snow} />
                          </group>
                          <group name="Snow_Roof008" position={[0, 0, 64.249]} rotation={[Math.PI / 2, 0.112, 0]} scale={[22.714, 13.114, 22.95]}>
                            <mesh name="Snow_Roof008_Snow_0" geometry={nodes.Snow_Roof008_Snow_0.geometry} material={materials.Snow} />
                            <mesh name="Snow_Roof008_House_Roof_0" geometry={nodes.Snow_Roof008_House_Roof_0.geometry} material={materials.House_Roof} />
                          </group>
                          <group name="Snow_Base000" position={[0, 0, 27.539]} rotation={[0, 0, -1.459]} scale={[34.424, 27.539, 27.539]}>
                            <mesh name="Snow_Base000_House_Chimney_0" geometry={nodes.Snow_Base000_House_Chimney_0.geometry} material={materials.House_Chimney} />
                            <mesh name="Snow_Base000_House_0" geometry={nodes.Snow_Base000_House_0.geometry} material={materials.House} />
                            <mesh name="Snow_Base000_House_Door_0" geometry={nodes.Snow_Base000_House_Door_0.geometry} material={materials.House_Door} />
                          </group>
                        </group>
                      </group>
                    </group>
                    <group name="000_Snow_Pines">
                      <group name="Snow_Pine_Parent024" rotation={[-0.066, 0.226, 0.289]}>
                        <group name="Snow_Pine024" position={[0, 0, 1.022]} rotation={[0, 0, -0.232]} scale={0.035}>
                          <mesh name="Snow_Pine024_Tree_Bark_0" geometry={nodes.Snow_Pine024_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                          <mesh name="Snow_Pine024_Tree_Leaves_0" geometry={nodes.Snow_Pine024_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                          <mesh name="Snow_Pine024_Snow_0" geometry={nodes.Snow_Pine024_Snow_0.geometry} material={materials.Snow} />
                        </group>
                      </group>
                      <group name="Snow_Pine_Parent023" rotation={[-0.285, 0.176, 1.032]}>
                        <group name="Snow_Pine023" position={[0, 0, 1.022]} rotation={[0, 0, -0.232]} scale={0.035}>
                          <mesh name="Snow_Pine023_Tree_Bark_0" geometry={nodes.Snow_Pine023_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                          <mesh name="Snow_Pine023_Tree_Leaves_0" geometry={nodes.Snow_Pine023_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                          <mesh name="Snow_Pine023_Snow_0" geometry={nodes.Snow_Pine023_Snow_0.geometry} material={materials.Snow} />
                        </group>
                      </group>
                      <group name="Snow_Pine_Parent022" rotation={[-0.205, 0.173, 0.878]}>
                        <group name="Snow_Pine022" position={[0, 0, 1.022]} rotation={[0, 0, -0.232]} scale={0.035}>
                          <mesh name="Snow_Pine022_Tree_Bark_0" geometry={nodes.Snow_Pine022_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                          <mesh name="Snow_Pine022_Tree_Leaves_0" geometry={nodes.Snow_Pine022_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                          <mesh name="Snow_Pine022_Snow_0" geometry={nodes.Snow_Pine022_Snow_0.geometry} material={materials.Snow} />
                        </group>
                      </group>
                      <group name="Snow_Pine_Parent021" rotation={[-0.246, 0.104, 1.179]}>
                        <group name="Snow_Pine021" position={[0, 0, 1.022]} rotation={[0, 0, -0.232]} scale={0.035}>
                          <mesh name="Snow_Pine021_Tree_Bark_0" geometry={nodes.Snow_Pine021_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                          <mesh name="Snow_Pine021_Tree_Leaves_0" geometry={nodes.Snow_Pine021_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                          <mesh name="Snow_Pine021_Snow_0" geometry={nodes.Snow_Pine021_Snow_0.geometry} material={materials.Snow} />
                        </group>
                      </group>
                      <group name="Snow_Pine_Parent020" rotation={[-0.381, -0.027, 1.637]}>
                        <group name="Snow_Pine020" position={[0, 0, 1.019]} rotation={[0, 0, -0.232]} scale={0.035}>
                          <mesh name="Snow_Pine020_Tree_Bark_0" geometry={nodes.Snow_Pine020_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                          <mesh name="Snow_Pine020_Tree_Leaves_0" geometry={nodes.Snow_Pine020_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                          <mesh name="Snow_Pine020_Snow_0" geometry={nodes.Snow_Pine020_Snow_0.geometry} material={materials.Snow} />
                        </group>
                      </group>
                      <group name="Snow_Pine_Parent019" rotation={[-0.443, -0.132, 1.841]}>
                        <group name="Snow_Pine019" position={[0, 0, 1.022]} rotation={[0, 0, -0.232]} scale={0.035}>
                          <mesh name="Snow_Pine019_Tree_Bark_0" geometry={nodes.Snow_Pine019_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                          <mesh name="Snow_Pine019_Tree_Leaves_0" geometry={nodes.Snow_Pine019_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                          <mesh name="Snow_Pine019_Snow_0" geometry={nodes.Snow_Pine019_Snow_0.geometry} material={materials.Snow} />
                        </group>
                      </group>
                      <group name="Snow_Pine_Parent018" rotation={[-0.401, -0.186, 1.981]}>
                        <group name="Snow_Pine018" position={[0, 0, 1.022]} rotation={[0, 0, -0.232]} scale={0.035}>
                          <mesh name="Snow_Pine018_Tree_Bark_0" geometry={nodes.Snow_Pine018_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                          <mesh name="Snow_Pine018_Tree_Leaves_0" geometry={nodes.Snow_Pine018_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                          <mesh name="Snow_Pine018_Snow_0" geometry={nodes.Snow_Pine018_Snow_0.geometry} material={materials.Snow} />
                        </group>
                      </group>
                      <group name="Snow_Pine_Parent017" rotation={[-0.33, -0.194, 2.083]}>
                        <group name="Snow_Pine017" position={[0, 0, 1.022]} rotation={[0, 0, -0.232]} scale={0.035}>
                          <mesh name="Snow_Pine017_Tree_Bark_0" geometry={nodes.Snow_Pine017_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                          <mesh name="Snow_Pine017_Tree_Leaves_0" geometry={nodes.Snow_Pine017_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                          <mesh name="Snow_Pine017_Snow_0" geometry={nodes.Snow_Pine017_Snow_0.geometry} material={materials.Snow} />
                        </group>
                      </group>
                      <group name="Snow_Pine_Parent016" rotation={[-0.156, -0.294, 2.644]}>
                        <group name="Snow_Pine016" position={[0, 0, 1.022]} rotation={[0, 0, -0.232]} scale={0.035}>
                          <mesh name="Snow_Pine016_Tree_Bark_0" geometry={nodes.Snow_Pine016_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                          <mesh name="Snow_Pine016_Tree_Leaves_0" geometry={nodes.Snow_Pine016_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                          <mesh name="Snow_Pine016_Snow_0" geometry={nodes.Snow_Pine016_Snow_0.geometry} material={materials.Snow} />
                        </group>
                      </group>
                      <group name="Snow_Pine_Parent015" rotation={[-0.192, -0.233, 2.442]}>
                        <group name="Snow_Pine015" position={[0, 0, 1.022]} rotation={[0, 0, -0.232]} scale={0.035}>
                          <mesh name="Snow_Pine015_Tree_Bark_0" geometry={nodes.Snow_Pine015_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                          <mesh name="Snow_Pine015_Tree_Leaves_0" geometry={nodes.Snow_Pine015_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                          <mesh name="Snow_Pine015_Snow_0" geometry={nodes.Snow_Pine015_Snow_0.geometry} material={materials.Snow} />
                        </group>
                      </group>
                      <group name="Snow_Pine_Parent014" rotation={[-0.121, -0.229, 2.649]}>
                        <group name="Snow_Pine014" position={[0, 0, 1.022]} rotation={[0, 0, -0.232]} scale={0.035}>
                          <mesh name="Snow_Pine014_Tree_Bark_0" geometry={nodes.Snow_Pine014_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                          <mesh name="Snow_Pine014_Tree_Leaves_0" geometry={nodes.Snow_Pine014_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                          <mesh name="Snow_Pine014_Snow_0" geometry={nodes.Snow_Pine014_Snow_0.geometry} material={materials.Snow} />
                        </group>
                      </group>
                      <group name="Snow_Pine_Parent013" rotation={[0.05, -0.218, -2.914]}>
                        <group name="Snow_Pine013" position={[0, 0, 1.022]} rotation={[0, 0, -0.232]} scale={0.035}>
                          <mesh name="Snow_Pine013_Tree_Bark_0" geometry={nodes.Snow_Pine013_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                          <mesh name="Snow_Pine013_Tree_Leaves_0" geometry={nodes.Snow_Pine013_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                          <mesh name="Snow_Pine013_Snow_0" geometry={nodes.Snow_Pine013_Snow_0.geometry} material={materials.Snow} />
                        </group>
                      </group>
                      <group name="Snow_Pine_Parent012" rotation={[0.178, -0.287, -2.575]}>
                        <group name="Snow_Pine012" position={[0, 0, 1.017]} rotation={[0, 0, -0.232]} scale={0.035}>
                          <mesh name="Snow_Pine012_Tree_Bark_0" geometry={nodes.Snow_Pine012_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                          <mesh name="Snow_Pine012_Tree_Leaves_0" geometry={nodes.Snow_Pine012_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                          <mesh name="Snow_Pine012_Snow_0" geometry={nodes.Snow_Pine012_Snow_0.geometry} material={materials.Snow} />
                        </group>
                      </group>
                      <group name="Snow_Pine_Parent011" rotation={[0.248, -0.376, -2.537]}>
                        <group name="Snow_Pine011" position={[0, 0, 1.013]} rotation={[0, 0, -0.232]} scale={0.035}>
                          <mesh name="Snow_Pine011_Tree_Bark_0" geometry={nodes.Snow_Pine011_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                          <mesh name="Snow_Pine011_Tree_Leaves_0" geometry={nodes.Snow_Pine011_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                          <mesh name="Snow_Pine011_Snow_0" geometry={nodes.Snow_Pine011_Snow_0.geometry} material={materials.Snow} />
                        </group>
                      </group>
                      <group name="Snow_Pine_Parent010" rotation={[0.422, -0.268, -2.103]}>
                        <group name="Snow_Pine010" position={[0, 0, 1.011]} rotation={[0, 0, -0.232]} scale={0.035}>
                          <mesh name="Snow_Pine010_Tree_Bark_0" geometry={nodes.Snow_Pine010_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                          <mesh name="Snow_Pine010_Tree_Leaves_0" geometry={nodes.Snow_Pine010_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                          <mesh name="Snow_Pine010_Snow_0" geometry={nodes.Snow_Pine010_Snow_0.geometry} material={materials.Snow} />
                        </group>
                      </group>
                      <group name="Snow_Pine_Parent009" rotation={[0.436, -0.189, -1.953]}>
                        <group name="Snow_Pine009" position={[0, 0, 1.024]} rotation={[0, 0, -0.232]} scale={0.035}>
                          <mesh name="Snow_Pine009_Tree_Bark_0" geometry={nodes.Snow_Pine009_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                          <mesh name="Snow_Pine009_Tree_Leaves_0" geometry={nodes.Snow_Pine009_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                          <mesh name="Snow_Pine009_Snow_0" geometry={nodes.Snow_Pine009_Snow_0.geometry} material={materials.Snow} />
                        </group>
                      </group>
                      <group name="Snow_Pine_Parent008" rotation={[0.206, -0.092, -1.985]}>
                        <group name="Snow_Pine008" position={[0, 0, 1.019]} rotation={[0, 0, -0.232]} scale={0.035}>
                          <mesh name="Snow_Pine008_Tree_Bark_0" geometry={nodes.Snow_Pine008_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                          <mesh name="Snow_Pine008_Tree_Leaves_0" geometry={nodes.Snow_Pine008_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                          <mesh name="Snow_Pine008_Snow_0" geometry={nodes.Snow_Pine008_Snow_0.geometry} material={materials.Snow} />
                        </group>
                      </group>
                      <group name="Snow_Pine_Parent007" rotation={[0.356, -0.108, -1.853]}>
                        <group name="Snow_Pine007" position={[0, 0, 1.022]} rotation={[0, 0, -0.232]} scale={0.035}>
                          <mesh name="Snow_Pine007_Tree_Bark_0" geometry={nodes.Snow_Pine007_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                          <mesh name="Snow_Pine007_Tree_Leaves_0" geometry={nodes.Snow_Pine007_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                          <mesh name="Snow_Pine007_Snow_0" geometry={nodes.Snow_Pine007_Snow_0.geometry} material={materials.Snow} />
                        </group>
                      </group>
                      <group name="Snow_Pine_Parent006" rotation={[0.182, -0.156, -2.272]}>
                        <group name="Snow_Pine006" position={[0, 0, 1.022]} rotation={[0, 0, -0.232]} scale={0.035}>
                          <mesh name="Snow_Pine006_Tree_Bark_0" geometry={nodes.Snow_Pine006_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                          <mesh name="Snow_Pine006_Tree_Leaves_0" geometry={nodes.Snow_Pine006_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                          <mesh name="Snow_Pine006_Snow_0" geometry={nodes.Snow_Pine006_Snow_0.geometry} material={materials.Snow} />
                        </group>
                      </group>
                      <group name="Snow_Pine_Parent005" rotation={[0.269, 0.099, -1.226]}>
                        <group name="Snow_Pine005" position={[0, 0, 1.022]} rotation={[0, 0, -0.232]} scale={0.035}>
                          <mesh name="Snow_Pine005_Tree_Bark_0" geometry={nodes.Snow_Pine005_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                          <mesh name="Snow_Pine005_Tree_Leaves_0" geometry={nodes.Snow_Pine005_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                          <mesh name="Snow_Pine005_Snow_0" geometry={nodes.Snow_Pine005_Snow_0.geometry} material={materials.Snow} />
                        </group>
                      </group>
                      <group name="Snow_Pine_Parent004" rotation={[0.295, 0.211, -0.063]}>
                        <group name="Snow_Pine004" position={[0, 0, 1.022]} rotation={[0, 0, -0.232]} scale={0.035}>
                          <mesh name="Snow_Pine004_Tree_Bark_0" geometry={nodes.Snow_Pine004_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                          <mesh name="Snow_Pine004_Tree_Leaves_0" geometry={nodes.Snow_Pine004_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                          <mesh name="Snow_Pine004_Snow_0" geometry={nodes.Snow_Pine004_Snow_0.geometry} material={materials.Snow} />
                        </group>
                      </group>
                      <group name="Snow_Pine_Parent003" rotation={[0.302, 0.304, -0.093]}>
                        <group name="Snow_Pine003" position={[0, 0, 1.022]} rotation={[0, 0, -0.232]} scale={0.035}>
                          <mesh name="Snow_Pine003_Tree_Bark_0" geometry={nodes.Snow_Pine003_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                          <mesh name="Snow_Pine003_Tree_Leaves_0" geometry={nodes.Snow_Pine003_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                          <mesh name="Snow_Pine003_Snow_0" geometry={nodes.Snow_Pine003_Snow_0.geometry} material={materials.Snow} />
                        </group>
                      </group>
                      <group name="Snow_Pine_Parent002" rotation={[0.069, 0.423, -0.028]}>
                        <group name="Snow_Pine002" position={[0, 0, 1.015]} rotation={[0, 0, -0.232]} scale={0.035}>
                          <mesh name="Snow_Pine002_Tree_Bark_0" geometry={nodes.Snow_Pine002_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                          <mesh name="Snow_Pine002_Tree_Leaves_0" geometry={nodes.Snow_Pine002_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                          <mesh name="Snow_Pine002_Snow_0" geometry={nodes.Snow_Pine002_Snow_0.geometry} material={materials.Snow} />
                        </group>
                      </group>
                      <group name="Snow_Pine_Parent001" rotation={[0.117, 0.34, -0.039]}>
                        <group name="Snow_Pine001" position={[0, 0, 1.023]} rotation={[0, 0, 0.272]} scale={0.035}>
                          <mesh name="Snow_Pine001_Tree_Bark_0" geometry={nodes.Snow_Pine001_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                          <mesh name="Snow_Pine001_Tree_Leaves_0" geometry={nodes.Snow_Pine001_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                          <mesh name="Snow_Pine001_Snow_0" geometry={nodes.Snow_Pine001_Snow_0.geometry} material={materials.Snow} />
                        </group>
                      </group>
                      <group name="Snow_Pine_Parent000" rotation={[0, 0.358, 0]}>
                        <group name="Snow_Pine000" position={[0, 0, 1.022]} rotation={[0, 0, 0.346]} scale={0.035}>
                          <mesh name="Snow_Pine000_Tree_Bark_0" geometry={nodes.Snow_Pine000_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                          <mesh name="Snow_Pine000_Tree_Leaves_0" geometry={nodes.Snow_Pine000_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                          <mesh name="Snow_Pine000_Snow_0" geometry={nodes.Snow_Pine000_Snow_0.geometry} material={materials.Snow} />
                        </group>
                      </group>
                    </group>
                    <group name="000_Palm_Trees">
                      <group name="Palm_Tree_Parent029" rotation={[1.918, -0.273, 1.668]}>
                        <group name="Palm_Tree_Object029" position={[0, 0, 1.015]} rotation={[0, 0, 1.363]} scale={0.023}>
                          <group name="Object_288">
                            <primitive object={nodes._rootJoint} />
                            <group name="Object_290" position={[41.819, -37.914, 101.188]} rotation={[1.279, -1.002, -1.083]} scale={[6.898, 2.708, 2.299]} />
                            <group name="Object_293" position={[41.819, -37.914, 101.188]} rotation={[1.279, -1.002, -1.083]} scale={[6.898, 2.708, 2.299]} />
                            <group name="Object_296" position={[41.819, -37.914, 101.188]} rotation={[1.279, -1.002, -1.083]} scale={[6.898, 2.708, 2.299]} />
                            <group name="Object_299" position={[41.819, -37.914, 101.188]} rotation={[1.279, -1.002, -1.083]} scale={[6.898, 2.708, 2.299]} />
                            <group name="Object_302" position={[41.819, -37.914, 101.188]} rotation={[1.279, -1.002, -1.083]} scale={[6.898, 2.708, 2.299]} />
                            <group name="Object_305" position={[41.819, -37.914, 101.188]} rotation={[1.279, -1.002, -1.083]} scale={[6.898, 2.708, 2.299]} />
                            <group name="Object_308" position={[41.819, -37.914, 101.188]} rotation={[1.279, -1.002, -1.083]} scale={[6.898, 2.708, 2.299]} />
                            <group name="Object_311" position={[41.819, -37.914, 101.188]} rotation={[1.279, -1.002, -1.083]} scale={[6.898, 2.708, 2.299]} />
                            <group name="Object_314" position={[41.819, -37.914, 101.188]} rotation={[1.279, -1.002, -1.083]} scale={[6.898, 2.708, 2.299]} />
                            <group name="Object_317" position={[41.819, -37.914, 101.188]} rotation={[1.279, -1.002, -1.083]} scale={[6.898, 2.708, 2.299]} />
                            <group name="Object_320" position={[41.819, -37.914, 101.188]} rotation={[1.279, -1.002, -1.083]} scale={[6.898, 2.708, 2.299]} />
                            <group name="Object_323" position={[41.819, -37.914, 101.188]} rotation={[1.279, -1.002, -1.083]} scale={[6.898, 2.708, 2.299]} />
                            <group name="Object_326" position={[41.819, -37.914, 101.188]} rotation={[1.279, -1.002, -1.083]} scale={[6.898, 2.708, 2.299]} />
                            <group name="Object_329" position={[41.819, -37.914, 101.188]} rotation={[1.279, -1.002, -1.083]} scale={[6.898, 2.708, 2.299]} />
                            <group name="Object_332" position={[41.819, -37.914, 101.188]} rotation={[1.279, -1.002, -1.083]} scale={[6.898, 2.708, 2.299]} />
                            <group name="Object_335" position={[41.819, -37.914, 101.188]} rotation={[1.279, -1.002, -1.083]} scale={[6.898, 2.708, 2.299]} />
                            <group name="Object_338" position={[41.819, -37.914, 101.188]} rotation={[1.279, -1.002, -1.083]} scale={[6.898, 2.708, 2.299]} />
                            <group name="Object_341" position={[41.819, -37.914, 101.188]} rotation={[1.279, -1.002, -1.083]} scale={[6.898, 2.708, 2.299]} />
                            <group name="Object_344" position={[41.819, -37.914, 101.188]} rotation={[1.279, -1.002, -1.083]} scale={[6.898, 2.708, 2.299]} />
                            <group name="Object_347" position={[41.819, -37.914, 101.188]} rotation={[1.279, -1.002, -1.083]} scale={[6.898, 2.708, 2.299]} />
                            <group name="Object_350" position={[41.819, -37.914, 101.188]} rotation={[1.279, -1.002, -1.083]} scale={[6.898, 2.708, 2.299]} />
                            <group name="Object_353" position={[41.819, -37.914, 101.188]} rotation={[1.279, -1.002, -1.083]} scale={[6.898, 2.708, 2.299]} />
                            <group name="Object_356" position={[41.819, -37.914, 101.188]} rotation={[1.279, -1.002, -1.083]} scale={[6.898, 2.708, 2.299]} />
                            <group name="Object_359" position={[41.819, -37.914, 101.188]} rotation={[1.279, -1.002, -1.083]} scale={[6.898, 2.708, 2.299]} />
                            <group name="Object_362" position={[41.819, -37.914, 101.188]} rotation={[1.279, -1.002, -1.083]} scale={[6.898, 2.708, 2.299]} />
                            <group name="Object_365" position={[41.819, -37.914, 101.188]} rotation={[1.279, -1.002, -1.083]} scale={[6.898, 2.708, 2.299]} />
                            <group name="Object_368" position={[41.819, -37.914, 101.188]} rotation={[1.279, -1.002, -1.083]} scale={[6.898, 2.708, 2.299]} />
                            <group name="Object_371" position={[41.819, -37.914, 101.188]} rotation={[1.279, -1.002, -1.083]} scale={[6.898, 2.708, 2.299]} />
                            <group name="Object_374" position={[41.819, -37.914, 101.188]} rotation={[1.279, -1.002, -1.083]} scale={[6.898, 2.708, 2.299]} />
                            <group name="Object_377" position={[41.819, -37.914, 101.188]} rotation={[1.279, -1.002, -1.083]} scale={[6.898, 2.708, 2.299]} />
                            <skinnedMesh name="Object_291" geometry={nodes.Object_291.geometry} material={materials.Palm_Tree_Leaves} skeleton={nodes.Object_291.skeleton} />
                            <skinnedMesh name="Object_292" geometry={nodes.Object_292.geometry} material={materials.Palm_Tree} skeleton={nodes.Object_292.skeleton} />
                            <skinnedMesh name="Object_294" geometry={nodes.Object_294.geometry} material={materials.Palm_Tree_Leaves} skeleton={nodes.Object_294.skeleton} />
                            <skinnedMesh name="Object_295" geometry={nodes.Object_295.geometry} material={materials.Palm_Tree} skeleton={nodes.Object_295.skeleton} />
                            <skinnedMesh name="Object_297" geometry={nodes.Object_297.geometry} material={materials.Palm_Tree_Leaves} skeleton={nodes.Object_297.skeleton} />
                            <skinnedMesh name="Object_298" geometry={nodes.Object_298.geometry} material={materials.Palm_Tree} skeleton={nodes.Object_298.skeleton} />
                            <skinnedMesh name="Object_300" geometry={nodes.Object_300.geometry} material={materials.Palm_Tree_Leaves} skeleton={nodes.Object_300.skeleton} />
                            <skinnedMesh name="Object_301" geometry={nodes.Object_301.geometry} material={materials.Palm_Tree} skeleton={nodes.Object_301.skeleton} />
                            <skinnedMesh name="Object_303" geometry={nodes.Object_303.geometry} material={materials.Palm_Tree_Leaves} skeleton={nodes.Object_303.skeleton} />
                            <skinnedMesh name="Object_304" geometry={nodes.Object_304.geometry} material={materials.Palm_Tree} skeleton={nodes.Object_304.skeleton} />
                            <skinnedMesh name="Object_306" geometry={nodes.Object_306.geometry} material={materials.Palm_Tree_Leaves} skeleton={nodes.Object_306.skeleton} />
                            <skinnedMesh name="Object_307" geometry={nodes.Object_307.geometry} material={materials.Palm_Tree} skeleton={nodes.Object_307.skeleton} />
                            <skinnedMesh name="Object_309" geometry={nodes.Object_309.geometry} material={materials.Palm_Tree_Leaves} skeleton={nodes.Object_309.skeleton} />
                            <skinnedMesh name="Object_310" geometry={nodes.Object_310.geometry} material={materials.Palm_Tree} skeleton={nodes.Object_310.skeleton} />
                            <skinnedMesh name="Object_312" geometry={nodes.Object_312.geometry} material={materials.Palm_Tree_Leaves} skeleton={nodes.Object_312.skeleton} />
                            <skinnedMesh name="Object_313" geometry={nodes.Object_313.geometry} material={materials.Palm_Tree} skeleton={nodes.Object_313.skeleton} />
                            <skinnedMesh name="Object_315" geometry={nodes.Object_315.geometry} material={materials.Palm_Tree_Leaves} skeleton={nodes.Object_315.skeleton} />
                            <skinnedMesh name="Object_316" geometry={nodes.Object_316.geometry} material={materials.Palm_Tree} skeleton={nodes.Object_316.skeleton} />
                            <skinnedMesh name="Object_318" geometry={nodes.Object_318.geometry} material={materials.Palm_Tree_Leaves} skeleton={nodes.Object_318.skeleton} />
                            <skinnedMesh name="Object_319" geometry={nodes.Object_319.geometry} material={materials.Palm_Tree} skeleton={nodes.Object_319.skeleton} />
                            <skinnedMesh name="Object_321" geometry={nodes.Object_321.geometry} material={materials.Palm_Tree_Leaves} skeleton={nodes.Object_321.skeleton} />
                            <skinnedMesh name="Object_322" geometry={nodes.Object_322.geometry} material={materials.Palm_Tree} skeleton={nodes.Object_322.skeleton} />
                            <skinnedMesh name="Object_324" geometry={nodes.Object_324.geometry} material={materials.Palm_Tree_Leaves} skeleton={nodes.Object_324.skeleton} />
                            <skinnedMesh name="Object_325" geometry={nodes.Object_325.geometry} material={materials.Palm_Tree} skeleton={nodes.Object_325.skeleton} />
                            <skinnedMesh name="Object_327" geometry={nodes.Object_327.geometry} material={materials.Palm_Tree_Leaves} skeleton={nodes.Object_327.skeleton} />
                            <skinnedMesh name="Object_328" geometry={nodes.Object_328.geometry} material={materials.Palm_Tree} skeleton={nodes.Object_328.skeleton} />
                            <skinnedMesh name="Object_330" geometry={nodes.Object_330.geometry} material={materials.Palm_Tree_Leaves} skeleton={nodes.Object_330.skeleton} />
                            <skinnedMesh name="Object_331" geometry={nodes.Object_331.geometry} material={materials.Palm_Tree} skeleton={nodes.Object_331.skeleton} />
                            <skinnedMesh name="Object_333" geometry={nodes.Object_333.geometry} material={materials.Palm_Tree_Leaves} skeleton={nodes.Object_333.skeleton} />
                            <skinnedMesh name="Object_334" geometry={nodes.Object_334.geometry} material={materials.Palm_Tree} skeleton={nodes.Object_334.skeleton} />
                            <skinnedMesh name="Object_336" geometry={nodes.Object_336.geometry} material={materials.Palm_Tree_Leaves} skeleton={nodes.Object_336.skeleton} />
                            <skinnedMesh name="Object_337" geometry={nodes.Object_337.geometry} material={materials.Palm_Tree} skeleton={nodes.Object_337.skeleton} />
                            <skinnedMesh name="Object_339" geometry={nodes.Object_339.geometry} material={materials.Palm_Tree_Leaves} skeleton={nodes.Object_339.skeleton} />
                            <skinnedMesh name="Object_340" geometry={nodes.Object_340.geometry} material={materials.Palm_Tree} skeleton={nodes.Object_340.skeleton} />
                            <skinnedMesh name="Object_342" geometry={nodes.Object_342.geometry} material={materials.Palm_Tree_Leaves} skeleton={nodes.Object_342.skeleton} />
                            <skinnedMesh name="Object_343" geometry={nodes.Object_343.geometry} material={materials.Palm_Tree} skeleton={nodes.Object_343.skeleton} />
                            <skinnedMesh name="Object_345" geometry={nodes.Object_345.geometry} material={materials.Palm_Tree_Leaves} skeleton={nodes.Object_345.skeleton} />
                            <skinnedMesh name="Object_346" geometry={nodes.Object_346.geometry} material={materials.Palm_Tree} skeleton={nodes.Object_346.skeleton} />
                            <skinnedMesh name="Object_348" geometry={nodes.Object_348.geometry} material={materials.Palm_Tree_Leaves} skeleton={nodes.Object_348.skeleton} />
                            <skinnedMesh name="Object_349" geometry={nodes.Object_349.geometry} material={materials.Palm_Tree} skeleton={nodes.Object_349.skeleton} />
                            <skinnedMesh name="Object_351" geometry={nodes.Object_351.geometry} material={materials.Palm_Tree_Leaves} skeleton={nodes.Object_351.skeleton} />
                            <skinnedMesh name="Object_352" geometry={nodes.Object_352.geometry} material={materials.Palm_Tree} skeleton={nodes.Object_352.skeleton} />
                            <skinnedMesh name="Object_354" geometry={nodes.Object_354.geometry} material={materials.Palm_Tree_Leaves} skeleton={nodes.Object_354.skeleton} />
                            <skinnedMesh name="Object_355" geometry={nodes.Object_355.geometry} material={materials.Palm_Tree} skeleton={nodes.Object_355.skeleton} />
                            <skinnedMesh name="Object_357" geometry={nodes.Object_357.geometry} material={materials.Palm_Tree_Leaves} skeleton={nodes.Object_357.skeleton} />
                            <skinnedMesh name="Object_358" geometry={nodes.Object_358.geometry} material={materials.Palm_Tree} skeleton={nodes.Object_358.skeleton} />
                            <skinnedMesh name="Object_360" geometry={nodes.Object_360.geometry} material={materials.Palm_Tree_Leaves} skeleton={nodes.Object_360.skeleton} />
                            <skinnedMesh name="Object_361" geometry={nodes.Object_361.geometry} material={materials.Palm_Tree} skeleton={nodes.Object_361.skeleton} />
                            <skinnedMesh name="Object_363" geometry={nodes.Object_363.geometry} material={materials.Palm_Tree_Leaves} skeleton={nodes.Object_363.skeleton} />
                            <skinnedMesh name="Object_364" geometry={nodes.Object_364.geometry} material={materials.Palm_Tree} skeleton={nodes.Object_364.skeleton} />
                            <skinnedMesh name="Object_366" geometry={nodes.Object_366.geometry} material={materials.Palm_Tree_Leaves} skeleton={nodes.Object_366.skeleton} />
                            <skinnedMesh name="Object_367" geometry={nodes.Object_367.geometry} material={materials.Palm_Tree} skeleton={nodes.Object_367.skeleton} />
                            <skinnedMesh name="Object_369" geometry={nodes.Object_369.geometry} material={materials.Palm_Tree_Leaves} skeleton={nodes.Object_369.skeleton} />
                            <skinnedMesh name="Object_370" geometry={nodes.Object_370.geometry} material={materials.Palm_Tree} skeleton={nodes.Object_370.skeleton} />
                            <skinnedMesh name="Object_372" geometry={nodes.Object_372.geometry} material={materials.Palm_Tree_Leaves} skeleton={nodes.Object_372.skeleton} />
                            <skinnedMesh name="Object_373" geometry={nodes.Object_373.geometry} material={materials.Palm_Tree} skeleton={nodes.Object_373.skeleton} />
                            <skinnedMesh name="Object_375" geometry={nodes.Object_375.geometry} material={materials.Palm_Tree_Leaves} skeleton={nodes.Object_375.skeleton} />
                            <skinnedMesh name="Object_376" geometry={nodes.Object_376.geometry} material={materials.Palm_Tree} skeleton={nodes.Object_376.skeleton} />
                            <skinnedMesh name="Object_378" geometry={nodes.Object_378.geometry} material={materials.Palm_Tree_Leaves} skeleton={nodes.Object_378.skeleton} />
                            <skinnedMesh name="Object_379" geometry={nodes.Object_379.geometry} material={materials.Palm_Tree} skeleton={nodes.Object_379.skeleton} />
                          </group>
                        </group>
                      </group>
                      <group name="Palm_Tree_Parent028" rotation={[2.015, -0.363, 1.738]}>
                        <group name="Palm_Tree_Object028" position={[0, 0, 1.015]} rotation={[0, 0, 1.035]} scale={0.023} />
                      </group>
                      <group name="Palm_Tree_Parent027" rotation={[2.109, -0.573, 1.883]}>
                        <group name="Palm_Tree_Object027" position={[0, 0, 1.015]} rotation={[0, 0, 0.559]} scale={0.023} />
                      </group>
                      <group name="Palm_Tree_Parent026" rotation={[2.197, -0.667, 1.992]}>
                        <group name="Palm_Tree_Object026" position={[0, 0, 1.015]} rotation={[0, 0, 0.307]} scale={0.023} />
                      </group>
                      <group name="Palm_Tree_Parent025" rotation={[2.324, -0.811, 2.168]}>
                        <group name="Palm_Tree_Object025" position={[0, 0, 1.015]} rotation={[0, 0, -0.08]} scale={0.023} />
                      </group>
                      <group name="Palm_Tree_Parent024" rotation={[2, -0.868, 1.907]}>
                        <group name="Palm_Tree_Object024" position={[0, 0, 1.015]} rotation={[0, 0, 0.592]} scale={0.023} />
                      </group>
                      <group name="Palm_Tree_Parent023" rotation={[1.529, -0.412, 1.554]}>
                        <group name="Palm_Tree_Object023" position={[0, 0, 1.015]} rotation={[0, 0, 0.592]} scale={0.023} />
                      </group>
                      <group name="Palm_Tree_Parent022" rotation={[1.448, -0.694, 1.492]}>
                        <group name="Palm_Tree_Object022" position={[0, 0, 1.015]} rotation={[0, 0, -0.197]} scale={0.023} />
                      </group>
                      <group name="Palm_Tree_Parent021" rotation={[1.483, -0.579, 1.523]}>
                        <group name="Palm_Tree_Object021" position={[0, 0, 1.015]} rotation={[0, 0, 0.475]} scale={0.023} />
                      </group>
                      <group name="Palm_Tree_Parent020" rotation={[1.425, -0.484, 1.502]}>
                        <group name="Palm_Tree_Object020" position={[0, 0, 1.015]} rotation={[0, 0, 1.618]} scale={0.023} />
                      </group>
                      <group name="Palm_Tree_Parent019" rotation={[1.322, -0.514, 1.446]}>
                        <group name="Palm_Tree_Object019" position={[0, 0, 1.015]} rotation={[0, 0, 2.459]} scale={0.023} />
                      </group>
                      <group name="Palm_Tree_Parent018" rotation={[1.343, -0.647, 1.432]}>
                        <group name="Palm_Tree_Object018" position={[0, 0, 1.015]} rotation={[0, 0, 2.883]} scale={0.023} />
                      </group>
                      <group name="Palm_Tree_Parent017" rotation={[1.4, -0.785, 1.45]}>
                        <group name="Palm_Tree_Object017" position={[0, 0, 1.015]} rotation={[0, 0, -3.094]} scale={0.023} />
                      </group>
                      <group name="Palm_Tree_Parent016" rotation={[1.546, -0.879, 1.552]}>
                        <group name="Palm_Tree_Object016" position={[0, 0, 1.015]} rotation={[0, 0, -3.044]} scale={0.023} />
                      </group>
                      <group name="Palm_Tree_Parent015" rotation={[1.723, -1.144, 1.71]}>
                        <group name="Palm_Tree_Object015" position={[0, 0, 1.015]} rotation={[0, 0, 2.36]} scale={0.023} />
                      </group>
                      <group name="Palm_Tree_Parent014" rotation={[1.782, -1.266, 1.772]}>
                        <group name="Palm_Tree_Object014" position={[0, 0, 1.015]} rotation={[0, 0, 2.798]} scale={0.023} />
                      </group>
                      <group name="Palm_Tree_Parent013" rotation={[-3.102, -1.085, -3.097]}>
                        <group name="Palm_Tree_Object013" position={[0, 0, 1.015]} rotation={[0, 0, -2.562]} scale={0.023} />
                      </group>
                      <group name="Palm_Tree_Parent012" rotation={[2.957, -0.975, 2.92]}>
                        <group name="Palm_Tree_Object012" position={[0, 0, 1.015]} rotation={[0, 0, -3.107]} scale={0.023} />
                      </group>
                      <group name="Palm_Tree_Parent011" rotation={[2.842, -0.888, 2.763]}>
                        <group name="Palm_Tree_Object011" position={[0, 0, 1.015]} rotation={[0, 0, 2.587]} scale={0.023} />
                      </group>
                      <group name="Palm_Tree_Parent010" rotation={[2.77, -0.805, 2.988]}>
                        <group name="Palm_Tree_Object010" position={[0, 0, 1.015]} rotation={[0, 0, 0.29]} scale={0.023} />
                      </group>
                      <group name="Palm_Tree_Parent009" rotation={[2.966, -0.881, 3.114]}>
                        <group name="Palm_Tree_Object009" position={[0, 0, 1.015]} rotation={[0, 0, -0.667]} scale={0.023} />
                      </group>
                      <group name="Palm_Tree_Parent008" rotation={[-3.103, -0.99, -3.017]}>
                        <group name="Palm_Tree_Object008" position={[0, 0, 1.015]} rotation={[0, 0, -0.023]} scale={0.023} />
                      </group>
                      <group name="Palm_Tree_Parent007" rotation={[-2.893, -1.034, -2.843]}>
                        <group name="Palm_Tree_Object007" position={[0, 0, 1.015]} rotation={[0, 0, -0.658]} scale={0.023} />
                      </group>
                      <group name="Palm_Tree_Parent006" rotation={[-1.405, -1.401, -1.407]}>
                        <group name="Palm_Tree_Object006" position={[0, 0, 1.015]} rotation={[0, 0, -0.658]} scale={0.023} />
                      </group>
                      <group name="Palm_Tree_Parent005" rotation={[0.807, -1.422, 0.813]}>
                        <group name="Palm_Tree_Object005" position={[0, 0, 1.015]} rotation={[0, 0, -0.183]} scale={0.023} />
                      </group>
                      <group name="Palm_Tree_Parent004" rotation={[-0.125, -1.432, -0.126]}>
                        <group name="Palm_Tree_Object004" position={[0, 0, 1.015]} rotation={[0, 0, -0.777]} scale={0.023} />
                      </group>
                      <group name="Palm_Tree_Parent003" rotation={[-1.007, -1.367, -1.017]}>
                        <group name="Palm_Tree_Object003" position={[0, 0, 1.015]} rotation={[0, 0, -2.459]} scale={0.023} />
                      </group>
                      <group name="Palm_Tree_Parent002" rotation={[-0.015, -1.349, -0.016]}>
                        <group name="Palm_Tree_Object002" position={[0, 0, 1.015]} rotation={[0, 0, 2.621]} scale={0.023} />
                      </group>
                      <group name="Palm_Tree_Parent001" rotation={[0.556, -1.342, 0.568]}>
                        <group name="Palm_Tree_Object001" position={[0, 0, 1.015]} rotation={[0, 0, 2.337]} scale={0.023} />
                      </group>
                      <group name="Palm_Tree_Parent000" rotation={[-0.517, -1.348, -0.528]}>
                        <group name="Palm_Tree_Object000" position={[0, 0, 1.015]} rotation={[0, 0, 3.087]} scale={0.023} />
                      </group>
                    </group>
                    <group name="111_Pine_Trees">
                      <group name="000_Pine_Trees011" rotation={[2.813, 0.237, -1.015]} scale={0.989}>
                        <group name="Pine_Tree_Parent081" rotation={[2.024, 0.92, -1.941]}>
                          <group name="Pine_Tree081" position={[0, 0, 1.038]} rotation={[0, 0, 1.466]} scale={0.041}>
                            <group name="Cone246" position={[0, 0, 2.992]} scale={0.621}>
                              <mesh name="Cone246_Tree_Leaves_0" geometry={nodes.Cone246_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                              <mesh name="Cone246_Tree_Bark_0" geometry={nodes.Cone246_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                            </group>
                          </group>
                        </group>
                        <group name="Pine_Tree_Parent080" rotation={[2.144, 0.673, -1.953]}>
                          <group name="Pine_Tree080" position={[0, 0, 1.038]} rotation={[0, 0, 1.466]} scale={0.037}>
                            <group name="Cylinder080" position={[0, 0, 4.79]}>
                              <mesh name="Cylinder080_Tree_Leaves_0" geometry={nodes.Cylinder080_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                              <mesh name="Cylinder080_Tree_Bark_0" geometry={nodes.Cylinder080_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                            </group>
                          </group>
                        </group>
                        <group name="Pine_Tree_Parent079" rotation={[2.191, 0.752, -2.025]}>
                          <group name="Pine_Tree079" position={[0, 0, 1.038]} rotation={[0, 0, 1.1]} scale={0.04}>
                            <group name="Cone240" position={[0, 0, 2.992]} scale={0.621}>
                              <mesh name="Cone240_Tree_Leaves_0" geometry={nodes.Cone240_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                              <mesh name="Cone240_Tree_Bark_0" geometry={nodes.Cone240_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                            </group>
                          </group>
                        </group>
                        <group name="Pine_Tree_Parent078" rotation={[2.122, 0.834, -1.998]}>
                          <group name="Pine_Tree078" position={[0, 0, 1.038]} rotation={[0, 0, 1.1]} scale={0.047}>
                            <group name="Cone239" position={[0, 0, 2.992]} scale={0.621}>
                              <mesh name="Cone239_Tree_Leaves_0" geometry={nodes.Cone239_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                              <mesh name="Cone239_Tree_Bark_0" geometry={nodes.Cone239_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                            </group>
                          </group>
                        </group>
                        <group name="Pine_Tree_Parent077" rotation={[2.056, 0.733, -1.91]}>
                          <group name="Pine_Tree077" position={[0, 0, 1.038]} rotation={[0, 0, 0.656]} scale={0.057}>
                            <group name="Cone236" position={[0, 0, 4.821]}>
                              <mesh name="Cone236_Tree_Leaves_0" geometry={nodes.Cone236_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                              <mesh name="Cone236_Tree_Bark_0" geometry={nodes.Cone236_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                            </group>
                          </group>
                        </group>
                        <group name="Pine_Tree_Parent076" rotation={[1.964, 0.835, -1.869]}>
                          <group name="Pine_Tree076" position={[0, 0, 1.038]} rotation={[0, 0, 0.278]} scale={0.057}>
                            <group name="Cone233" position={[0, 0, 2.992]} scale={0.621}>
                              <mesh name="Cone233_Tree_Leaves_0" geometry={nodes.Cone233_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                              <mesh name="Cone233_Tree_Bark_0" geometry={nodes.Cone233_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                            </group>
                          </group>
                        </group>
                      </group>
                      <group name="000_Pine_Trees010" rotation={[0.151, -0.392, 2.392]} scale={0.986}>
                        <group name="Pine_Tree_Parent075" rotation={[1.964, 0.835, -1.869]}>
                          <group name="Pine_Tree075" position={[0, 0, 1.038]} rotation={[0, 0, 0.278]} scale={0.057}>
                            <group name="Cone228" position={[0, 0, 2.992]} scale={0.621}>
                              <mesh name="Cone228_Tree_Leaves_0" geometry={nodes.Cone228_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                              <mesh name="Cone228_Tree_Bark_0" geometry={nodes.Cone228_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                            </group>
                          </group>
                        </group>
                        <group name="Pine_Tree_Parent074" rotation={[2.056, 0.733, -1.91]}>
                          <group name="Pine_Tree074" position={[0, 0, 1.038]} rotation={[0, 0, 0.656]} scale={0.057}>
                            <group name="Cone227" position={[0, 0, 2.992]} scale={0.621}>
                              <mesh name="Cone227_Tree_Leaves_0" geometry={nodes.Cone227_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                              <mesh name="Cone227_Tree_Bark_0" geometry={nodes.Cone227_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                            </group>
                          </group>
                        </group>
                        <group name="Pine_Tree_Parent073" rotation={[2.122, 0.834, -1.998]}>
                          <group name="Pine_Tree073" position={[0, 0, 1.038]} rotation={[0, 0, 1.1]} scale={0.047}>
                            <group name="Cone222" position={[0, 0, 2.992]} scale={0.621}>
                              <mesh name="Cone222_Tree_Leaves_0" geometry={nodes.Cone222_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                              <mesh name="Cone222_Tree_Bark_0" geometry={nodes.Cone222_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                            </group>
                          </group>
                        </group>
                        <group name="Pine_Tree_Parent072" rotation={[2.191, 0.752, -2.025]}>
                          <group name="Pine_Tree072" position={[0, 0, 1.038]} rotation={[0, 0, 1.1]} scale={0.04}>
                            <group name="Cone221" position={[0, 0, 2.992]} scale={0.621}>
                              <mesh name="Cone221_Tree_Leaves_0" geometry={nodes.Cone221_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                              <mesh name="Cone221_Tree_Bark_0" geometry={nodes.Cone221_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                            </group>
                          </group>
                        </group>
                        <group name="Pine_Tree_Parent071" rotation={[2.144, 0.673, -1.953]}>
                          <group name="Pine_Tree071" position={[0, 0, 1.038]} rotation={[0, 0, 1.466]} scale={0.037}>
                            <group name="Cone216" position={[0, 0, 2.992]} scale={0.621}>
                              <mesh name="Cone216_Tree_Leaves_0" geometry={nodes.Cone216_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                              <mesh name="Cone216_Tree_Bark_0" geometry={nodes.Cone216_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                            </group>
                          </group>
                        </group>
                        <group name="Pine_Tree_Parent070" rotation={[2.024, 0.92, -1.941]}>
                          <group name="Pine_Tree070" position={[0, 0, 1.038]} rotation={[0, 0, 1.466]} scale={0.041}>
                            <group name="Cone215" position={[0, 0, 2.992]} scale={0.621}>
                              <mesh name="Cone215_Tree_Leaves_0" geometry={nodes.Cone215_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                              <mesh name="Cone215_Tree_Bark_0" geometry={nodes.Cone215_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                            </group>
                          </group>
                        </group>
                      </group>
                      <group name="000_Pine_Trees009" rotation={[0.186, 0.427, 1.765]} scale={1.005}>
                        <group name="Pine_Tree_Parent069" rotation={[1.964, 0.835, -1.869]}>
                          <group name="Pine_Tree069" position={[0, 0, 1.038]} rotation={[0, 0, 0.278]} scale={0.057}>
                            <group name="Cone210" position={[0, 0, 2.992]} scale={0.621}>
                              <mesh name="Cone210_Tree_Leaves_0" geometry={nodes.Cone210_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                              <mesh name="Cone210_Tree_Bark_0" geometry={nodes.Cone210_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                            </group>
                          </group>
                        </group>
                        <group name="Pine_Tree_Parent068" rotation={[2.056, 0.733, -1.91]}>
                          <group name="Pine_Tree068" position={[0, 0, 1.038]} rotation={[0, 0, 0.656]} scale={0.057}>
                            <group name="Cone209" position={[0, 0, 2.992]} scale={0.621}>
                              <mesh name="Cone209_Tree_Leaves_0" geometry={nodes.Cone209_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                              <mesh name="Cone209_Tree_Bark_0" geometry={nodes.Cone209_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                            </group>
                          </group>
                        </group>
                        <group name="Pine_Tree_Parent067" rotation={[2.122, 0.834, -1.998]}>
                          <group name="Pine_Tree067" position={[0, 0, 1.038]} rotation={[0, 0, 1.1]} scale={0.047}>
                            <group name="Cone204" position={[0, 0, 2.992]} scale={0.621}>
                              <mesh name="Cone204_Tree_Leaves_0" geometry={nodes.Cone204_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                              <mesh name="Cone204_Tree_Bark_0" geometry={nodes.Cone204_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                            </group>
                          </group>
                        </group>
                        <group name="Pine_Tree_Parent066" rotation={[2.191, 0.752, -2.025]}>
                          <group name="Pine_Tree066" position={[0, 0, 1.038]} rotation={[0, 0, 1.1]} scale={0.04}>
                            <group name="Cone203" position={[0, 0, 2.992]} scale={0.621}>
                              <mesh name="Cone203_Tree_Leaves_0" geometry={nodes.Cone203_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                              <mesh name="Cone203_Tree_Bark_0" geometry={nodes.Cone203_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                            </group>
                          </group>
                        </group>
                        <group name="Pine_Tree_Parent065" rotation={[2.144, 0.673, -1.953]}>
                          <group name="Pine_Tree065" position={[0, 0, 1.038]} rotation={[0, 0, 1.466]} scale={0.037}>
                            <group name="Cone198" position={[0, 0, 2.992]} scale={0.621}>
                              <mesh name="Cone198_Tree_Leaves_0" geometry={nodes.Cone198_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                              <mesh name="Cone198_Tree_Bark_0" geometry={nodes.Cone198_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                            </group>
                          </group>
                        </group>
                        <group name="Pine_Tree_Parent064" rotation={[2.024, 0.92, -1.941]}>
                          <group name="Pine_Tree064" position={[0, 0, 1.038]} rotation={[0, 0, 1.466]} scale={0.041}>
                            <group name="Cone197" position={[0, 0, 2.992]} scale={0.621}>
                              <mesh name="Cone197_Tree_Leaves_0" geometry={nodes.Cone197_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                              <mesh name="Cone197_Tree_Bark_0" geometry={nodes.Cone197_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                            </group>
                          </group>
                        </group>
                      </group>
                      <group name="000_Pine_Trees008" rotation={[2.948, -1.47, -0.403]}>
                        <group name="Pine_Tree_Parent063" rotation={[2.024, 0.92, -1.941]}>
                          <group name="Pine_Tree063" position={[0, 0, 1.025]} rotation={[0, 0, 1.466]} scale={0.041}>
                            <group name="Cone192" position={[0, 0, 2.992]} scale={0.621}>
                              <mesh name="Cone192_Tree_Leaves_0" geometry={nodes.Cone192_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                              <mesh name="Cone192_Tree_Bark_0" geometry={nodes.Cone192_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                            </group>
                          </group>
                        </group>
                        <group name="Pine_Tree_Parent062" rotation={[2.144, 0.673, -1.953]}>
                          <group name="Pine_Tree062" position={[0, 0, 1.065]} rotation={[0, 0, 1.466]} scale={0.037}>
                            <group name="Cone191" position={[0, 0, 2.992]} scale={0.621}>
                              <mesh name="Cone191_Tree_Leaves_0" geometry={nodes.Cone191_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                              <mesh name="Cone191_Tree_Bark_0" geometry={nodes.Cone191_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                            </group>
                          </group>
                        </group>
                        <group name="Pine_Tree_Parent061" rotation={[2.191, 0.752, -2.025]}>
                          <group name="Pine_Tree061" position={[0, 0, 1.065]} rotation={[0, 0, 1.1]} scale={0.04}>
                            <group name="Cone186" position={[0, 0, 2.992]} scale={0.621}>
                              <mesh name="Cone186_Tree_Leaves_0" geometry={nodes.Cone186_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                              <mesh name="Cone186_Tree_Bark_0" geometry={nodes.Cone186_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                            </group>
                          </group>
                        </group>
                        <group name="Pine_Tree_Parent060" rotation={[2.122, 0.834, -1.998]}>
                          <group name="Pine_Tree060" position={[0, 0, 1.038]} rotation={[0, 0, 1.1]} scale={0.047}>
                            <group name="Cone185" position={[0, 0, 2.992]} scale={0.621}>
                              <mesh name="Cone185_Tree_Leaves_0" geometry={nodes.Cone185_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                              <mesh name="Cone185_Tree_Bark_0" geometry={nodes.Cone185_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                            </group>
                          </group>
                        </group>
                        <group name="Pine_Tree_Parent059" rotation={[2.056, 0.733, -1.91]}>
                          <group name="Pine_Tree059" position={[0, 0, 1.038]} rotation={[0, 0, 0.656]} scale={0.057}>
                            <group name="Cone180" position={[0, 0, 2.992]} scale={0.621}>
                              <mesh name="Cone180_Tree_Leaves_0" geometry={nodes.Cone180_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                              <mesh name="Cone180_Tree_Bark_0" geometry={nodes.Cone180_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                            </group>
                          </group>
                        </group>
                        <group name="Pine_Tree_Parent058" rotation={[1.964, 0.835, -1.869]}>
                          <group name="Pine_Tree058" position={[0, 0, 1.038]} rotation={[0, 0, 0.278]} scale={0.057}>
                            <group name="Cone179" position={[0, 0, 2.992]} scale={0.621}>
                              <mesh name="Cone179_Tree_Leaves_0" geometry={nodes.Cone179_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                              <mesh name="Cone179_Tree_Bark_0" geometry={nodes.Cone179_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                            </group>
                          </group>
                        </group>
                      </group>
                      <group name="000_Pine_Trees007" rotation={[-3.015, -1.214, -0.462]} scale={0.988}>
                        <group name="Pine_Tree_Parent057" rotation={[1.964, 0.835, -1.869]}>
                          <group name="Pine_Tree057" position={[0, 0, 1.038]} rotation={[0, 0, 0.278]} scale={0.057}>
                            <group name="Cone174" position={[0, 0, 2.992]} scale={0.621}>
                              <mesh name="Cone174_Tree_Leaves_0" geometry={nodes.Cone174_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                              <mesh name="Cone174_Tree_Bark_0" geometry={nodes.Cone174_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                            </group>
                          </group>
                        </group>
                        <group name="Pine_Tree_Parent056" rotation={[2.056, 0.733, -1.91]}>
                          <group name="Pine_Tree056" position={[0, 0, 1.038]} rotation={[0, 0, 0.656]} scale={0.057}>
                            <group name="Cone173" position={[0, 0, 2.992]} scale={0.621}>
                              <mesh name="Cone173_Tree_Leaves_0" geometry={nodes.Cone173_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                              <mesh name="Cone173_Tree_Bark_0" geometry={nodes.Cone173_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                            </group>
                          </group>
                        </group>
                        <group name="Pine_Tree_Parent055" rotation={[2.122, 0.834, -1.998]}>
                          <group name="Pine_Tree055" position={[0, 0, 1.038]} rotation={[0, 0, 1.1]} scale={0.047}>
                            <group name="Cone168" position={[0, 0, 2.992]} scale={0.621}>
                              <mesh name="Cone168_Tree_Leaves_0" geometry={nodes.Cone168_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                              <mesh name="Cone168_Tree_Bark_0" geometry={nodes.Cone168_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                            </group>
                          </group>
                        </group>
                        <group name="Pine_Tree_Parent054" rotation={[2.191, 0.752, -2.025]}>
                          <group name="Pine_Tree054" position={[0, 0, 1.038]} rotation={[0, 0, 1.1]} scale={0.04}>
                            <group name="Cone167" position={[0, 0, 2.992]} scale={0.621}>
                              <mesh name="Cone167_Tree_Leaves_0" geometry={nodes.Cone167_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                              <mesh name="Cone167_Tree_Bark_0" geometry={nodes.Cone167_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                            </group>
                          </group>
                        </group>
                        <group name="Pine_Tree_Parent053" rotation={[2.144, 0.673, -1.953]}>
                          <group name="Pine_Tree053" position={[0, 0, 1.038]} rotation={[0, 0, 1.466]} scale={0.037}>
                            <group name="Cone162" position={[0, 0, 2.992]} scale={0.621}>
                              <mesh name="Cone162_Tree_Leaves_0" geometry={nodes.Cone162_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                              <mesh name="Cone162_Tree_Bark_0" geometry={nodes.Cone162_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                            </group>
                          </group>
                        </group>
                        <group name="Pine_Tree_Parent052" rotation={[2.024, 0.92, -1.941]}>
                          <group name="Pine_Tree052" position={[0, 0, 1.07]} rotation={[0, 0, 1.466]} scale={0.041}>
                            <group name="Cone161" position={[0, 0, 2.992]} scale={0.621}>
                              <mesh name="Cone161_Tree_Leaves_0" geometry={nodes.Cone161_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                              <mesh name="Cone161_Tree_Bark_0" geometry={nodes.Cone161_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                            </group>
                          </group>
                        </group>
                      </group>
                      <group name="000_Pine_Trees006" rotation={[-2.048, -0.611, 0.615]} scale={0.982}>
                        <group name="Pine_Tree_Parent051" rotation={[2.024, 0.92, -1.941]}>
                          <group name="Pine_Tree051" position={[0, 0, 1.038]} rotation={[0, 0, 1.466]} scale={0.041}>
                            <group name="Cone156" position={[0, 0, 2.992]} scale={0.621}>
                              <mesh name="Cone156_Tree_Leaves_0" geometry={nodes.Cone156_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                              <mesh name="Cone156_Tree_Bark_0" geometry={nodes.Cone156_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                            </group>
                          </group>
                        </group>
                        <group name="Pine_Tree_Parent050" rotation={[2.144, 0.673, -1.953]}>
                          <group name="Pine_Tree050" position={[0, 0, 1.038]} rotation={[0, 0, 1.466]} scale={0.037}>
                            <group name="Cone155" position={[0, 0, 2.992]} scale={0.621}>
                              <mesh name="Cone155_Tree_Leaves_0" geometry={nodes.Cone155_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                              <mesh name="Cone155_Tree_Bark_0" geometry={nodes.Cone155_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                            </group>
                          </group>
                        </group>
                        <group name="Pine_Tree_Parent049" rotation={[2.191, 0.752, -2.025]}>
                          <group name="Pine_Tree049" position={[0, 0, 1.038]} rotation={[0, 0, 1.1]} scale={0.04}>
                            <group name="Cone150" position={[0, 0, 2.992]} scale={0.621}>
                              <mesh name="Cone150_Tree_Leaves_0" geometry={nodes.Cone150_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                              <mesh name="Cone150_Tree_Bark_0" geometry={nodes.Cone150_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                            </group>
                          </group>
                        </group>
                        <group name="Pine_Tree_Parent048" rotation={[2.122, 0.834, -1.998]}>
                          <group name="Pine_Tree048" position={[0, 0, 1.038]} rotation={[0, 0, 1.1]} scale={0.047}>
                            <group name="Cone149" position={[0, 0, 2.992]} scale={0.621}>
                              <mesh name="Cone149_Tree_Leaves_0" geometry={nodes.Cone149_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                              <mesh name="Cone149_Tree_Bark_0" geometry={nodes.Cone149_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                            </group>
                          </group>
                        </group>
                        <group name="Pine_Tree_Parent047" rotation={[2.056, 0.733, -1.91]}>
                          <group name="Pine_Tree047" position={[0, 0, 1.038]} rotation={[0, 0, 0.656]} scale={0.057}>
                            <group name="Cone144" position={[0, 0, 2.992]} scale={0.621}>
                              <mesh name="Cone144_Tree_Leaves_0" geometry={nodes.Cone144_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                              <mesh name="Cone144_Tree_Bark_0" geometry={nodes.Cone144_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                            </group>
                          </group>
                        </group>
                        <group name="Pine_Tree_Parent046" rotation={[1.964, 0.835, -1.869]}>
                          <group name="Pine_Tree046" position={[0, 0, 1.038]} rotation={[0, 0, 0.278]} scale={0.057}>
                            <group name="Cone143" position={[0, 0, 2.992]} scale={0.621}>
                              <mesh name="Cone143_Tree_Leaves_0" geometry={nodes.Cone143_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                              <mesh name="Cone143_Tree_Bark_0" geometry={nodes.Cone143_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                            </group>
                          </group>
                        </group>
                      </group>
                      <group name="000_Pine_Trees005" rotation={[-0.969, -0.647, 1.291]} scale={0.985}>
                        <group name="Pine_Tree_Parent045" rotation={[2.046, 0.643, -1.87]}>
                          <group name="Pine_Tree045" position={[0, 0, 1.038]} rotation={[0, 0, 0.838]} scale={0.041}>
                            <group name="Cone140" position={[0, 0, 2.992]} scale={0.621}>
                              <mesh name="Cone140_Tree_Leaves_0" geometry={nodes.Cone140_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                              <mesh name="Cone140_Tree_Bark_0" geometry={nodes.Cone140_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                            </group>
                          </group>
                        </group>
                        <group name="Pine_Tree_Parent044" rotation={[1.883, 0.914, -1.821]}>
                          <group name="Pine_Tree044" position={[0, 0, 1.038]} rotation={[0, 0, 1.665]} scale={0.037}>
                            <group name="Cone135" position={[0, 0, 2.992]} scale={0.621}>
                              <mesh name="Cone135_Tree_Leaves_0" geometry={nodes.Cone135_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                              <mesh name="Cone135_Tree_Bark_0" geometry={nodes.Cone135_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                            </group>
                          </group>
                        </group>
                        <group name="Pine_Tree_Parent043" rotation={[2.024, 0.92, -1.941]}>
                          <group name="Pine_Tree043" position={[0, 0, 1.038]} rotation={[0, 0, 1.466]} scale={0.041}>
                            <group name="Cone132" position={[0, 0, 2.992]} scale={0.621}>
                              <mesh name="Cone132_Tree_Leaves_0" geometry={nodes.Cone132_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                              <mesh name="Cone132_Tree_Bark_0" geometry={nodes.Cone132_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                            </group>
                          </group>
                        </group>
                        <group name="Pine_Tree_Parent042" rotation={[2.144, 0.673, -1.953]}>
                          <group name="Pine_Tree042" position={[0, 0, 1.038]} rotation={[0, 0, 1.466]} scale={0.037}>
                            <group name="Cone131" position={[0, 0, 2.992]} scale={0.621}>
                              <mesh name="Cone131_Tree_Leaves_0" geometry={nodes.Cone131_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                              <mesh name="Cone131_Tree_Bark_0" geometry={nodes.Cone131_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                            </group>
                          </group>
                        </group>
                        <group name="Pine_Tree_Parent041" rotation={[2.191, 0.752, -2.025]}>
                          <group name="Pine_Tree041" position={[0, 0, 1.038]} rotation={[0, 0, 1.1]} scale={0.04}>
                            <group name="Cone126" position={[0, 0, 2.992]} scale={0.621}>
                              <mesh name="Cone126_Tree_Leaves_0" geometry={nodes.Cone126_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                              <mesh name="Cone126_Tree_Bark_0" geometry={nodes.Cone126_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                            </group>
                          </group>
                        </group>
                        <group name="Pine_Tree_Parent040" rotation={[2.122, 0.834, -1.998]}>
                          <group name="Pine_Tree040" position={[0, 0, 1.038]} rotation={[0, 0, 1.1]} scale={0.047}>
                            <group name="Cone125" position={[0, 0, 2.992]} scale={0.621}>
                              <mesh name="Cone125_Tree_Leaves_0" geometry={nodes.Cone125_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                              <mesh name="Cone125_Tree_Bark_0" geometry={nodes.Cone125_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                            </group>
                          </group>
                        </group>
                        <group name="Pine_Tree_Parent039" rotation={[2.056, 0.733, -1.91]}>
                          <group name="Pine_Tree039" position={[0, 0, 1.038]} rotation={[0, 0, 0.656]} scale={0.057}>
                            <group name="Cone120" position={[0, 0, 2.992]} scale={0.621}>
                              <mesh name="Cone120_Tree_Leaves_0" geometry={nodes.Cone120_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                              <mesh name="Cone120_Tree_Bark_0" geometry={nodes.Cone120_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                            </group>
                          </group>
                        </group>
                        <group name="Pine_Tree_Parent038" rotation={[1.964, 0.835, -1.869]}>
                          <group name="Pine_Tree038" position={[0, 0, 1.038]} rotation={[0, 0, 0.278]} scale={0.057}>
                            <group name="Cone119" position={[0, 0, 2.992]} scale={0.621}>
                              <mesh name="Cone119_Tree_Leaves_0" geometry={nodes.Cone119_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                              <mesh name="Cone119_Tree_Bark_0" geometry={nodes.Cone119_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                            </group>
                          </group>
                        </group>
                      </group>
                      <group name="000_Pine_Trees004" rotation={[-2.871, -0.186, 0.271]}>
                        <group name="Pine_Tree_Parent037" rotation={[1.964, 0.835, -1.869]} scale={0.983}>
                          <group name="Pine_Tree037" position={[0, 0, 1.038]} rotation={[0, 0, 0.278]} scale={0.057}>
                            <group name="Cone114" position={[0, 0, 2.992]} scale={0.621}>
                              <mesh name="Cone114_Tree_Leaves_0" geometry={nodes.Cone114_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                              <mesh name="Cone114_Tree_Bark_0" geometry={nodes.Cone114_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                            </group>
                          </group>
                        </group>
                        <group name="Pine_Tree_Parent036" rotation={[2.056, 0.733, -1.91]} scale={0.983}>
                          <group name="Pine_Tree036" position={[0, 0, 1.038]} rotation={[0, 0, 0.656]} scale={0.057}>
                            <group name="Cone113" position={[0, 0, 2.992]} scale={0.621}>
                              <mesh name="Cone113_Tree_Leaves_0" geometry={nodes.Cone113_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                              <mesh name="Cone113_Tree_Bark_0" geometry={nodes.Cone113_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                            </group>
                          </group>
                        </group>
                        <group name="Pine_Tree_Parent035" rotation={[2.122, 0.834, -1.998]} scale={0.983}>
                          <group name="Pine_Tree035" position={[0, 0, 1.038]} rotation={[0, 0, 1.1]} scale={0.047}>
                            <group name="Cone108" position={[0, 0, 2.992]} scale={0.621}>
                              <mesh name="Cone108_Tree_Leaves_0" geometry={nodes.Cone108_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                              <mesh name="Cone108_Tree_Bark_0" geometry={nodes.Cone108_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                            </group>
                          </group>
                        </group>
                        <group name="Pine_Tree_Parent034" rotation={[2.191, 0.752, -2.025]} scale={0.983}>
                          <group name="Pine_Tree034" position={[0, 0, 1.038]} rotation={[0, 0, 1.1]} scale={0.04}>
                            <group name="Cone107" position={[0, 0, 2.992]} scale={0.621}>
                              <mesh name="Cone107_Tree_Leaves_0" geometry={nodes.Cone107_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                              <mesh name="Cone107_Tree_Bark_0" geometry={nodes.Cone107_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                            </group>
                          </group>
                        </group>
                        <group name="Pine_Tree_Parent033" rotation={[2.144, 0.673, -1.953]} scale={0.983}>
                          <group name="Pine_Tree033" position={[0, 0, 1.038]} rotation={[0, 0, 1.466]} scale={0.037}>
                            <group name="Cone102" position={[0, 0, 2.992]} scale={0.621}>
                              <mesh name="Cone102_Tree_Leaves_0" geometry={nodes.Cone102_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                              <mesh name="Cone102_Tree_Bark_0" geometry={nodes.Cone102_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                            </group>
                          </group>
                        </group>
                        <group name="Pine_Tree_Parent032" rotation={[2.024, 0.92, -1.941]} scale={0.983}>
                          <group name="Pine_Tree032" position={[0, 0, 1.038]} rotation={[0, 0, 1.466]} scale={0.041}>
                            <group name="Cone101" position={[0, 0, 2.992]} scale={0.621}>
                              <mesh name="Cone101_Tree_Leaves_0" geometry={nodes.Cone101_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                              <mesh name="Cone101_Tree_Bark_0" geometry={nodes.Cone101_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                            </group>
                          </group>
                        </group>
                        <group name="Pine_Tree_Parent031" rotation={[1.883, 0.914, -1.821]} scale={0.983}>
                          <group name="Pine_Tree031" position={[0, 0, 1.038]} rotation={[0, 0, 1.665]} scale={0.037}>
                            <group name="Cone098" position={[0, 0, 2.992]} scale={0.621}>
                              <mesh name="Cone098_Tree_Leaves_0" geometry={nodes.Cone098_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                              <mesh name="Cone098_Tree_Bark_0" geometry={nodes.Cone098_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                            </group>
                          </group>
                        </group>
                        <group name="Pine_Tree_Parent030" rotation={[2.046, 0.643, -1.87]} scale={0.983}>
                          <group name="Pine_Tree030" position={[0, 0, 1.038]} rotation={[0, 0, 0.838]} scale={0.041}>
                            <group name="Cone093" position={[0, 0, 2.992]} scale={0.621}>
                              <mesh name="Cone093_Tree_Leaves_0" geometry={nodes.Cone093_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                              <mesh name="Cone093_Tree_Bark_0" geometry={nodes.Cone093_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                            </group>
                          </group>
                        </group>
                      </group>
                      <group name="000_Pine_Trees003" rotation={[1.502, 0.576, 0.979]} scale={0.99}>
                        <group name="Pine_Tree_Parent029" rotation={[2.046, 0.643, -1.87]}>
                          <group name="Pine_Tree029" position={[0, 0, 1.038]} rotation={[0, 0, 0.838]} scale={0.041}>
                            <group name="Cone092" position={[0, 0, 2.992]} scale={0.621}>
                              <mesh name="Cone092_Tree_Leaves_0" geometry={nodes.Cone092_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                              <mesh name="Cone092_Tree_Bark_0" geometry={nodes.Cone092_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                            </group>
                          </group>
                        </group>
                        <group name="Pine_Tree_Parent028" rotation={[1.883, 0.914, -1.821]}>
                          <group name="Pine_Tree028" position={[0, 0, 1.038]} rotation={[0, 0, 1.665]} scale={0.037}>
                            <group name="Cone087" position={[0, 0, 2.992]} scale={0.621}>
                              <mesh name="Cone087_Tree_Leaves_0" geometry={nodes.Cone087_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                              <mesh name="Cone087_Tree_Bark_0" geometry={nodes.Cone087_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                            </group>
                          </group>
                        </group>
                        <group name="Pine_Tree_Parent027" rotation={[2.024, 0.92, -1.941]}>
                          <group name="Pine_Tree027" position={[0, 0, 1.038]} rotation={[0, 0, 1.466]} scale={0.041}>
                            <group name="Cone084" position={[0, 0, 2.992]} scale={0.621}>
                              <mesh name="Cone084_Tree_Leaves_0" geometry={nodes.Cone084_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                              <mesh name="Cone084_Tree_Bark_0" geometry={nodes.Cone084_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                            </group>
                          </group>
                        </group>
                        <group name="Pine_Tree_Parent026" rotation={[2.144, 0.673, -1.953]}>
                          <group name="Pine_Tree026" position={[0, 0, 1.038]} rotation={[0, 0, 1.466]} scale={0.037}>
                            <group name="Cone083" position={[0, 0, 2.992]} scale={0.621}>
                              <mesh name="Cone083_Tree_Leaves_0" geometry={nodes.Cone083_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                              <mesh name="Cone083_Tree_Bark_0" geometry={nodes.Cone083_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                            </group>
                          </group>
                        </group>
                        <group name="Pine_Tree_Parent025" rotation={[2.191, 0.752, -2.025]}>
                          <group name="Pine_Tree025" position={[0, 0, 1.038]} rotation={[0, 0, 1.1]} scale={0.04}>
                            <group name="Cone078" position={[0, 0, 2.992]} scale={0.621}>
                              <mesh name="Cone078_Tree_Leaves_0" geometry={nodes.Cone078_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                              <mesh name="Cone078_Tree_Bark_0" geometry={nodes.Cone078_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                            </group>
                          </group>
                        </group>
                        <group name="Pine_Tree_Parent024" rotation={[2.122, 0.834, -1.998]}>
                          <group name="Pine_Tree024" position={[0, 0, 1.038]} rotation={[0, 0, 1.1]} scale={0.047}>
                            <group name="Cone077" position={[0, 0, 2.992]} scale={0.621}>
                              <mesh name="Cone077_Tree_Leaves_0" geometry={nodes.Cone077_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                              <mesh name="Cone077_Tree_Bark_0" geometry={nodes.Cone077_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                            </group>
                          </group>
                        </group>
                        <group name="Pine_Tree_Parent023" rotation={[2.056, 0.733, -1.91]}>
                          <group name="Pine_Tree023" position={[0, 0, 1.038]} rotation={[0, 0, 0.656]} scale={0.057}>
                            <group name="Cone072" position={[0, 0, 2.992]} scale={0.621}>
                              <mesh name="Cone072_Tree_Leaves_0" geometry={nodes.Cone072_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                              <mesh name="Cone072_Tree_Bark_0" geometry={nodes.Cone072_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                            </group>
                          </group>
                        </group>
                        <group name="Pine_Tree_Parent022" rotation={[1.964, 0.835, -1.869]}>
                          <group name="Pine_Tree022" position={[0, 0, 1.038]} rotation={[0, 0, 0.278]} scale={0.057}>
                            <group name="Cone071" position={[0, 0, 2.992]} scale={0.621}>
                              <mesh name="Cone071_Tree_Leaves_0" geometry={nodes.Cone071_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                              <mesh name="Cone071_Tree_Bark_0" geometry={nodes.Cone071_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                            </group>
                          </group>
                        </group>
                      </group>
                      <group name="000_Pine_Trees002" rotation={[0.417, 0.34, 1.395]}>
                        <group name="Pine_Tree_Parent021" rotation={[1.964, 0.835, -1.869]}>
                          <group name="Pine_Tree021" position={[0, 0, 1.038]} rotation={[0, 0, 0.278]} scale={0.057}>
                            <group name="Cone066" position={[0, 0, 2.992]} scale={0.621}>
                              <mesh name="Cone066_Tree_Leaves_0" geometry={nodes.Cone066_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                              <mesh name="Cone066_Tree_Bark_0" geometry={nodes.Cone066_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                            </group>
                          </group>
                        </group>
                        <group name="Pine_Tree_Parent020" rotation={[2.056, 0.733, -1.91]}>
                          <group name="Pine_Tree020" position={[0, 0, 1.038]} rotation={[0, 0, 0.656]} scale={0.057}>
                            <group name="Cone065" position={[0, 0, 2.992]} scale={0.621}>
                              <mesh name="Cone065_Tree_Leaves_0" geometry={nodes.Cone065_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                              <mesh name="Cone065_Tree_Bark_0" geometry={nodes.Cone065_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                            </group>
                          </group>
                        </group>
                        <group name="Pine_Tree_Parent019" rotation={[2.122, 0.834, -1.998]}>
                          <group name="Pine_Tree019" position={[0, 0, 1.038]} rotation={[0, 0, 1.1]} scale={0.047}>
                            <group name="Cone060" position={[0, 0, 2.992]} scale={0.621}>
                              <mesh name="Cone060_Tree_Leaves_0" geometry={nodes.Cone060_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                              <mesh name="Cone060_Tree_Bark_0" geometry={nodes.Cone060_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                            </group>
                          </group>
                        </group>
                        <group name="Pine_Tree_Parent018" rotation={[2.191, 0.752, -2.025]}>
                          <group name="Pine_Tree018" position={[0, 0, 1.038]} rotation={[0, 0, 1.1]} scale={0.04}>
                            <group name="Cone059" position={[0, 0, 2.992]} scale={0.621}>
                              <mesh name="Cone059_Tree_Leaves_0" geometry={nodes.Cone059_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                              <mesh name="Cone059_Tree_Bark_0" geometry={nodes.Cone059_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                            </group>
                          </group>
                        </group>
                        <group name="Pine_Tree_Parent017" rotation={[2.144, 0.673, -1.953]}>
                          <group name="Pine_Tree017" position={[0, 0, 1.038]} rotation={[0, 0, 1.466]} scale={0.037}>
                            <group name="Cone054" position={[0, 0, 2.992]} scale={0.621}>
                              <mesh name="Cone054_Tree_Leaves_0" geometry={nodes.Cone054_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                              <mesh name="Cone054_Tree_Bark_0" geometry={nodes.Cone054_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                            </group>
                          </group>
                        </group>
                        <group name="Pine_Tree_Parent016" rotation={[2.024, 0.92, -1.941]}>
                          <group name="Pine_Tree016" position={[0, 0, 1.038]} rotation={[0, 0, 1.466]} scale={0.041}>
                            <group name="Cone053" position={[0, 0, 2.992]} scale={0.621}>
                              <mesh name="Cone053_Tree_Leaves_0" geometry={nodes.Cone053_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                              <mesh name="Cone053_Tree_Bark_0" geometry={nodes.Cone053_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                            </group>
                          </group>
                        </group>
                        <group name="Pine_Tree_Parent009" rotation={[1.883, 0.914, -1.821]}>
                          <group name="Pine_Tree009" position={[0, 0, 1.038]} rotation={[0, 0, 1.665]} scale={0.037}>
                            <group name="Cone032" position={[0, 0, 2.992]} scale={0.621}>
                              <mesh name="Cone032_Tree_Leaves_0" geometry={nodes.Cone032_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                              <mesh name="Cone032_Tree_Bark_0" geometry={nodes.Cone032_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                            </group>
                          </group>
                        </group>
                        <group name="Pine_Tree_Parent008" rotation={[2.046, 0.643, -1.87]}>
                          <group name="Pine_Tree008" position={[0, 0, 1.038]} rotation={[0, 0, 0.838]} scale={0.041}>
                            <group name="Cone027" position={[0, 0, 2.992]} scale={0.621}>
                              <mesh name="Cone027_Tree_Leaves_0" geometry={nodes.Cone027_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                              <mesh name="Cone027_Tree_Bark_0" geometry={nodes.Cone027_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                            </group>
                          </group>
                        </group>
                      </group>
                      <group name="000_Pine_Trees001" rotation={[-2.704, 0.218, 1.874]} scale={0.985}>
                        <group name="Pine_Tree_Parent015" rotation={[1.964, 0.835, -1.869]}>
                          <group name="Pine_Tree015" position={[0, 0, 1.038]} rotation={[0, 0, 0.278]} scale={0.057}>
                            <group name="Cone048" position={[0, 0, 2.992]} scale={0.621}>
                              <mesh name="Cone048_Tree_Leaves_0" geometry={nodes.Cone048_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                              <mesh name="Cone048_Tree_Bark_0" geometry={nodes.Cone048_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                            </group>
                          </group>
                        </group>
                        <group name="Pine_Tree_Parent014" rotation={[2.056, 0.733, -1.91]}>
                          <group name="Pine_Tree014" position={[0, 0, 1.038]} rotation={[0, 0, 0.656]} scale={0.057}>
                            <group name="Cone047" position={[0, 0, 2.992]} scale={0.621}>
                              <mesh name="Cone047_Tree_Leaves_0" geometry={nodes.Cone047_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                              <mesh name="Cone047_Tree_Bark_0" geometry={nodes.Cone047_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                            </group>
                          </group>
                        </group>
                        <group name="Pine_Tree_Parent013" rotation={[2.122, 0.834, -1.998]}>
                          <group name="Pine_Tree013" position={[0, 0, 1.038]} rotation={[0, 0, 1.1]} scale={0.047}>
                            <group name="Cone042" position={[0, 0, 2.992]} scale={0.621}>
                              <mesh name="Cone042_Tree_Leaves_0" geometry={nodes.Cone042_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                              <mesh name="Cone042_Tree_Bark_0" geometry={nodes.Cone042_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                            </group>
                          </group>
                        </group>
                        <group name="Pine_Tree_Parent012" rotation={[2.191, 0.752, -2.025]}>
                          <group name="Pine_Tree012" position={[0, 0, 1.038]} rotation={[0, 0, 1.1]} scale={0.04}>
                            <group name="Cone041" position={[0, 0, 2.992]} scale={0.621}>
                              <mesh name="Cone041_Tree_Leaves_0" geometry={nodes.Cone041_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                              <mesh name="Cone041_Tree_Bark_0" geometry={nodes.Cone041_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                            </group>
                          </group>
                        </group>
                        <group name="Pine_Tree_Parent011" rotation={[2.144, 0.673, -1.953]}>
                          <group name="Pine_Tree011" position={[0, 0, 1.038]} rotation={[0, 0, 1.466]} scale={0.037}>
                            <group name="Cone036" position={[0, 0, 2.992]} scale={0.621}>
                              <mesh name="Cone036_Tree_Leaves_0" geometry={nodes.Cone036_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                              <mesh name="Cone036_Tree_Bark_0" geometry={nodes.Cone036_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                            </group>
                          </group>
                        </group>
                        <group name="Pine_Tree_Parent010" rotation={[2.024, 0.92, -1.941]}>
                          <group name="Pine_Tree010" position={[0, 0, 1.038]} rotation={[0, 0, 1.466]} scale={0.041}>
                            <group name="Cone035" position={[0, 0, 2.992]} scale={0.621}>
                              <mesh name="Cone035_Tree_Leaves_0" geometry={nodes.Cone035_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                              <mesh name="Cone035_Tree_Bark_0" geometry={nodes.Cone035_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                            </group>
                          </group>
                        </group>
                      </group>
                      <group name="000_Pine_Trees" scale={0.987}>
                        <group name="Pine_Tree_Parent007" rotation={[2.046, 0.643, -1.87]}>
                          <group name="Pine_Tree007" position={[0, 0, 1.038]} rotation={[0, 0, 0.838]} scale={0.041}>
                            <group name="Cylinder007" position={[0, 0, 4.79]}>
                              <mesh name="Cylinder007_Tree_Leaves_0" geometry={nodes.Cylinder007_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                              <mesh name="Cylinder007_Tree_Bark_0" geometry={nodes.Cylinder007_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                            </group>
                          </group>
                        </group>
                        <group name="Pine_Tree_Parent006" rotation={[1.883, 0.914, -1.821]}>
                          <group name="Pine_Tree006" position={[0, 0, 1.038]} rotation={[0, 0, 1.665]} scale={0.037}>
                            <group name="Cone021" position={[0, 0, 2.992]} scale={0.621}>
                              <mesh name="Cone021_Tree_Leaves_0" geometry={nodes.Cone021_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                              <mesh name="Cone021_Tree_Bark_0" geometry={nodes.Cone021_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                            </group>
                          </group>
                        </group>
                        <group name="Pine_Tree_Parent005" rotation={[2.024, 0.92, -1.941]}>
                          <group name="Pine_Tree005" position={[0, 0, 1.038]} rotation={[0, 0, 1.466]} scale={0.041}>
                            <group name="Cone018" position={[0, 0, 2.992]} scale={0.621}>
                              <mesh name="Cone018_Tree_Leaves_0" geometry={nodes.Cone018_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                              <mesh name="Cone018_Tree_Bark_0" geometry={nodes.Cone018_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                            </group>
                          </group>
                        </group>
                        <group name="Pine_Tree_Parent004" rotation={[2.144, 0.673, -1.953]}>
                          <group name="Pine_Tree004" position={[0, 0, 1.038]} rotation={[0, 0, 1.466]} scale={0.037}>
                            <group name="Cylinder004" position={[0, 0, 4.98]}>
                              <mesh name="Cylinder004_Tree_Leaves_0" geometry={nodes.Cylinder004_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                              <mesh name="Cylinder004_Tree_Bark_0" geometry={nodes.Cylinder004_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                            </group>
                          </group>
                        </group>
                        <group name="Pine_Tree_Parent003" rotation={[2.191, 0.752, -2.025]}>
                          <group name="Pine_Tree003" position={[0, 0, 1.038]} rotation={[0, 0, 1.1]} scale={0.04}>
                            <group name="Cone012" position={[0, 0, 2.992]} scale={0.621}>
                              <mesh name="Cone012_Tree_Leaves_0" geometry={nodes.Cone012_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                              <mesh name="Cone012_Tree_Bark_0" geometry={nodes.Cone012_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                            </group>
                          </group>
                        </group>
                        <group name="Pine_Tree_Parent002" rotation={[2.122, 0.834, -1.998]}>
                          <group name="Pine_Tree002" position={[0, 0, 1.038]} rotation={[0, 0, 1.1]} scale={0.047}>
                            <group name="Cone011" position={[0, 0, 2.992]} scale={0.621}>
                              <mesh name="Cone011_Tree_Leaves_0" geometry={nodes.Cone011_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                              <mesh name="Cone011_Tree_Bark_0" geometry={nodes.Cone011_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                            </group>
                          </group>
                        </group>
                        <group name="Pine_Tree_Parent001" rotation={[2.056, 0.733, -1.91]}>
                          <group name="Pine_Tree001" position={[0, 0, 1.038]} rotation={[0, 0, 0.656]} scale={0.057}>
                            <group name="Cone006" position={[0, 0, 2.992]} scale={0.621}>
                              <mesh name="Cone006_Tree_Leaves_0" geometry={nodes.Cone006_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                              <mesh name="Cone006_Tree_Bark_0" geometry={nodes.Cone006_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                            </group>
                          </group>
                        </group>
                        <group name="Pine_Tree_Parent000" rotation={[1.964, 0.835, -1.869]}>
                          <group name="Pine_Tree000" position={[0, 0, 1.038]} rotation={[0, 0, 0.278]} scale={0.057}>
                            <group name="Cone005" position={[0, 0, 2.992]} scale={0.621}>
                              <mesh name="Cone005_Tree_Leaves_0" geometry={nodes.Cone005_Tree_Leaves_0.geometry} material={materials.Tree_Leaves} />
                              <mesh name="Cone005_Tree_Bark_0" geometry={nodes.Cone005_Tree_Bark_0.geometry} material={materials.Tree_Bark} />
                            </group>
                          </group>
                        </group>
                      </group>
                    </group>
                    <group name="000_Houses">
                      <group name="House_Parent019" rotation={[1.742, -0.561, 0.092]}>
                        <group name="House019" position={[0, 0, 1.012]} rotation={[0, 0, -0.855]} scale={0.031}>
                          <group name="Base019" position={[0, 0, 1]} scale={[1.25, 1, 1]}>
                            <mesh name="Base019_House_0" geometry={nodes.Base019_House_0.geometry} material={materials.House} />
                            <mesh name="Base019_House_Door_0" geometry={nodes.Base019_House_Door_0.geometry} material={materials.House_Door} />
                          </group>
                        </group>
                      </group>
                      <group name="House_Parent018" rotation={[1.902, -0.529, 0.172]}>
                        <group name="House018" position={[0, 0, 1.013]} rotation={[0, 0, -2.098]} scale={0.028}>
                          <group name="Base018" position={[0, 0, 1]} scale={[1.25, 1, 1]}>
                            <mesh name="Base018_House_0" geometry={nodes.Base018_House_0.geometry} material={materials.House} />
                            <mesh name="Base018_House_Door_0" geometry={nodes.Base018_House_Door_0.geometry} material={materials.House_Door} />
                          </group>
                        </group>
                      </group>
                      <group name="House_Parent017" rotation={[1.982, -0.639, 0.254]}>
                        <group name="House017" position={[0, 0, 1.009]} rotation={[0, 0, 2.805]} scale={0.032}>
                          <group name="Base017" position={[0, 0, 1]} scale={[1.25, 1, 1]}>
                            <mesh name="Base017_House_0" geometry={nodes.Base017_House_0.geometry} material={materials.House} />
                            <mesh name="Base017_House_Door_0" geometry={nodes.Base017_House_Door_0.geometry} material={materials.House_Door} />
                          </group>
                        </group>
                      </group>
                      <group name="House_Parent016" rotation={[1.881, -0.751, 0.215]}>
                        <group name="House016" position={[0, 0, 1.008]} rotation={[0, 0, 1.597]} scale={0.035}>
                          <group name="Base016" position={[0, 0, 1]} scale={[1.25, 1, 1]}>
                            <mesh name="Base016_House_0" geometry={nodes.Base016_House_0.geometry} material={materials.House} />
                            <mesh name="Base016_House_Door_0" geometry={nodes.Base016_House_Door_0.geometry} material={materials.House_Door} />
                          </group>
                        </group>
                      </group>
                      <group name="House_Parent015" rotation={[1.719, -0.694, 0.095]}>
                        <group name="House015" position={[0, 0, 1.011]} rotation={[0, 0, 0.429]} scale={0.028}>
                          <group name="Base015" position={[0, 0, 1]} scale={[1.25, 1, 1]}>
                            <mesh name="Base015_House_0" geometry={nodes.Base015_House_0.geometry} material={materials.House} />
                            <mesh name="Base015_House_Door_0" geometry={nodes.Base015_House_Door_0.geometry} material={materials.House_Door} />
                          </group>
                        </group>
                      </group>
                      <group name="House_Parent014" rotation={[2.852, -0.841, 1.191]}>
                        <group name="House014" position={[0, 0, 1.013]} rotation={[0, 0, 0.094]} scale={0.023}>
                          <group name="Base014" position={[0, 0, 1]} scale={[1.25, 1, 1]}>
                            <mesh name="Base014_House_0" geometry={nodes.Base014_House_0.geometry} material={materials.House} />
                            <mesh name="Base014_House_Door_0" geometry={nodes.Base014_House_Door_0.geometry} material={materials.House_Door} />
                          </group>
                        </group>
                      </group>
                      <group name="House_Parent013" rotation={[3.076, -0.948, 1.49]}>
                        <group name="House013" position={[0, 0, 1.031]} rotation={[0, 0, -0.468]} scale={0.023}>
                          <group name="Base013" position={[0, 0, 1]} scale={[1.25, 1, 1]}>
                            <mesh name="Base013_House_0" geometry={nodes.Base013_House_0.geometry} material={materials.House} />
                            <mesh name="Base013_House_Door_0" geometry={nodes.Base013_House_Door_0.geometry} material={materials.House_Door} />
                          </group>
                        </group>
                      </group>
                      <group name="House_Parent012" rotation={[-1.991, -1.416, 2.726]}>
                        <group name="House012" position={[0, 0, 1.021]} rotation={[0, 0, -0.567]} scale={0.03}>
                          <group name="Base012" position={[0, 0, 1]} scale={[1.25, 1, 1]}>
                            <mesh name="Base012_House_0" geometry={nodes.Base012_House_0.geometry} material={materials.House} />
                            <mesh name="Base012_House_Door_0" geometry={nodes.Base012_House_Door_0.geometry} material={materials.House_Door} />
                          </group>
                        </group>
                      </group>
                      <group name="House_Parent011" rotation={[-0.969, -1.45, -2.543]}>
                        <group name="House011" position={[0, 0, 1.017]} rotation={[0, 0, 0.429]} scale={0.03}>
                          <group name="Base011" position={[0, 0, 1]} scale={[1.25, 1, 1]}>
                            <mesh name="Base011_House_0" geometry={nodes.Base011_House_0.geometry} material={materials.House} />
                            <mesh name="Base011_House_Door_0" geometry={nodes.Base011_House_Door_0.geometry} material={materials.House_Door} />
                          </group>
                        </group>
                      </group>
                      <group name="House_Parent010" rotation={[1.718, -1.02, 0.126]}>
                        <group name="House010" position={[0, 0, 1.004]} rotation={[0, 0, -0.852]} scale={0.03}>
                          <group name="Base010" position={[0, 0, 1]} scale={[1.25, 1, 1]}>
                            <mesh name="Base010_House_0" geometry={nodes.Base010_House_0.geometry} material={materials.House} />
                            <mesh name="Base010_House_Door_0" geometry={nodes.Base010_House_Door_0.geometry} material={materials.House_Door} />
                          </group>
                        </group>
                      </group>
                      <group name="House_Parent009" rotation={[2.676, -1.112, 1.06]}>
                        <group name="House009" position={[0, 0, 1.031]} rotation={[0, 0, 2.651]} scale={0.023}>
                          <group name="Base009" position={[0, 0, 1]} scale={[1.25, 1, 1]}>
                            <mesh name="Base009_House_0" geometry={nodes.Base009_House_0.geometry} material={materials.House} />
                            <mesh name="Base009_House_Door_0" geometry={nodes.Base009_House_Door_0.geometry} material={materials.House_Door} />
                          </group>
                        </group>
                      </group>
                      <group name="House_Parent008" rotation={[2.539, -1.266, 0.946]}>
                        <group name="House008" position={[0, 0, 1.035]} rotation={[-0.068, 0.148, 0.434]} scale={0.03}>
                          <group name="Base008" position={[0, 0, 1]} scale={[1.25, 1, 1]}>
                            <mesh name="Base008_House_0" geometry={nodes.Base008_House_0.geometry} material={materials.House} />
                            <mesh name="Base008_House_Door_0" geometry={nodes.Base008_House_Door_0.geometry} material={materials.House_Door} />
                          </group>
                        </group>
                      </group>
                      <group name="House_Parent007" rotation={[-1.944, 0.755, -2.879]}>
                        <group name="House007" position={[0, 0, 1.038]} rotation={[0, 0, 0.429]} scale={0.03}>
                          <group name="Chimney007" position={[-0.75, 0.5, 2.5]} scale={[0.25, 0.25, 0.5]}>
                            <mesh name="Chimney007_House_Chimney_0" geometry={nodes.Chimney007_House_Chimney_0.geometry} material={materials.House_Chimney} />
                          </group>
                          <group name="Roof007" position={[0, 0, 2.333]} rotation={[Math.PI / 2, 1.571, 0]} scale={[0.825, 0.476, 0.833]}>
                            <mesh name="Roof007_House_Roof_0" geometry={nodes.Roof007_House_Roof_0.geometry} material={materials.House_Roof} />
                          </group>
                          <group name="Base007" position={[0, 0, 1]} scale={[1.25, 1, 1]}>
                            <mesh name="Base007_House_0" geometry={nodes.Base007_House_0.geometry} material={materials.House} />
                            <mesh name="Base007_House_Door_0" geometry={nodes.Base007_House_Door_0.geometry} material={materials.House_Door} />
                          </group>
                        </group>
                      </group>
                      <group name="House_Parent006" rotation={[-1.028, 0.732, 2.758]}>
                        <group name="House006" position={[0, 0, 1.021]} rotation={[0, 0, -2.642]} scale={0.036}>
                          <group name="Base006" position={[0, 0, 1]} scale={[1.25, 1, 1]}>
                            <mesh name="Base006_House_0" geometry={nodes.Base006_House_0.geometry} material={materials.House} />
                            <mesh name="Base006_House_Door_0" geometry={nodes.Base006_House_Door_0.geometry} material={materials.House_Door} />
                          </group>
                          <group name="Roof006" position={[0, 0, 2.333]} rotation={[Math.PI / 2, Math.PI / 2, 0]} scale={[0.825, 0.476, 0.833]}>
                            <mesh name="Roof006_House_Roof_0" geometry={nodes.Roof006_House_Roof_0.geometry} material={materials.House_Roof} />
                          </group>
                          <group name="Chimney006" position={[-0.75, 0.5, 2.5]} scale={[0.25, 0.25, 0.5]}>
                            <mesh name="Chimney006_House_Chimney_0" geometry={nodes.Chimney006_House_Chimney_0.geometry} material={materials.House_Chimney} />
                          </group>
                        </group>
                      </group>
                      <group name="House_Parent005" rotation={[-0.887, 0.871, 2.584]}>
                        <group name="House005" position={[0, 0, 1.021]} rotation={[0, 0, 2.569]} scale={0.036}>
                          <group name="Chimney005" position={[-0.75, 0.5, 2.5]} scale={[0.25, 0.25, 0.5]}>
                            <mesh name="Chimney005_House_Chimney_0" geometry={nodes.Chimney005_House_Chimney_0.geometry} material={materials.House_Chimney} />
                          </group>
                          <group name="Roof005" position={[0, 0, 2.333]} rotation={[Math.PI / 2, 1.571, 0]} scale={[0.825, 0.476, 0.833]}>
                            <mesh name="Roof005_House_Roof_0" geometry={nodes.Roof005_House_Roof_0.geometry} material={materials.House_Roof} />
                          </group>
                          <group name="Base005" position={[0, 0, 1]} scale={[1.25, 1, 1]}>
                            <mesh name="Base005_House_0" geometry={nodes.Base005_House_0.geometry} material={materials.House} />
                            <mesh name="Base005_House_Door_0" geometry={nodes.Base005_House_Door_0.geometry} material={materials.House_Door} />
                          </group>
                        </group>
                      </group>
                      <group name="House_Parent004" rotation={[2.562, 0.843, -0.851]}>
                        <group name="House004" position={[0, 0, 1.051]} rotation={[0, 0, 2.705]} scale={0.031}>
                          <group name="Chimney004" position={[-0.75, 0.5, 2.5]} scale={[0.25, 0.25, 0.5]}>
                            <mesh name="Chimney004_House_Chimney_0" geometry={nodes.Chimney004_House_Chimney_0.geometry} material={materials.House_Chimney} />
                          </group>
                          <group name="Roof004" position={[0, 0, 2.333]} rotation={[Math.PI / 2, Math.PI / 2, 0]} scale={[0.825, 0.476, 0.833]}>
                            <mesh name="Roof004_House_Roof_0" geometry={nodes.Roof004_House_Roof_0.geometry} material={materials.House_Roof} />
                          </group>
                          <group name="Base004" position={[0, 0, 1]} scale={[1.25, 1, 1]}>
                            <mesh name="Base004_House_0" geometry={nodes.Base004_House_0.geometry} material={materials.House} />
                            <mesh name="Base004_House_Door_0" geometry={nodes.Base004_House_Door_0.geometry} material={materials.House_Door} />
                          </group>
                        </group>
                      </group>
                      <group name="House_Parent003" rotation={[2.694, 0.926, -1.031]}>
                        <group name="House003" position={[0, 0, 1.051]} rotation={[0, 0, -2.611]} scale={0.036}>
                          <group name="Base003" position={[0, 0, 1]} scale={[1.25, 1, 1]}>
                            <mesh name="Base003_House_0" geometry={nodes.Base003_House_0.geometry} material={materials.House} />
                            <mesh name="Base003_House_Door_0" geometry={nodes.Base003_House_Door_0.geometry} material={materials.House_Door} />
                          </group>
                          <group name="Roof003" position={[0, 0, 2.333]} rotation={[Math.PI / 2, 1.571, 0]} scale={[0.825, 0.476, 0.833]}>
                            <mesh name="Roof003_House_Roof_0" geometry={nodes.Roof003_House_Roof_0.geometry} material={materials.House_Roof} />
                          </group>
                          <group name="Chimney003" position={[-0.75, 0.5, 2.5]} scale={[0.25, 0.25, 0.5]}>
                            <mesh name="Chimney003_House_Chimney_0" geometry={nodes.Chimney003_House_Chimney_0.geometry} material={materials.House_Chimney} />
                          </group>
                        </group>
                      </group>
                      <group name="House_Parent002" rotation={[2.603, 1.05, -0.968]}>
                        <group name="House002" position={[0, 0, 1.051]} rotation={[0, 0, -0.979]} scale={0.035}>
                          <group name="Chimney002" position={[-0.75, 0.5, 2.5]} scale={[0.25, 0.25, 0.5]}>
                            <mesh name="Chimney002_House_Chimney_0" geometry={nodes.Chimney002_House_Chimney_0.geometry} material={materials.House_Chimney} />
                          </group>
                          <group name="Roof002" position={[0, 0, 2.333]} rotation={[Math.PI / 2, 1.571, 0]} scale={[0.825, 0.476, 0.833]}>
                            <mesh name="Roof002_House_Roof_0" geometry={nodes.Roof002_House_Roof_0.geometry} material={materials.House_Roof} />
                          </group>
                          <group name="Base002" position={[0, 0, 1]} scale={[1.25, 1, 1]}>
                            <mesh name="Base002_House_0" geometry={nodes.Base002_House_0.geometry} material={materials.House} />
                            <mesh name="Base002_House_Door_0" geometry={nodes.Base002_House_Door_0.geometry} material={materials.House_Door} />
                          </group>
                        </group>
                      </group>
                      <group name="House_Parent001" rotation={[2.378, 0.869, -0.674]}>
                        <group name="House001" position={[0, 0, 1.051]} rotation={[0, 0, 1.459]} scale={0.036}>
                          <group name="Base001" position={[0, 0, 1]} scale={[1.25, 1, 1]}>
                            <mesh name="Base001_House_0" geometry={nodes.Base001_House_0.geometry} material={materials.House} />
                            <mesh name="Base001_House_Door_0" geometry={nodes.Base001_House_Door_0.geometry} material={materials.House_Door} />
                          </group>
                          <group name="Roof001" position={[0, 0, 2.333]} rotation={[Math.PI / 2, 1.571, 0]} scale={[0.825, 0.476, 0.833]}>
                            <mesh name="Roof001_House_Roof_0" geometry={nodes.Roof001_House_Roof_0.geometry} material={materials.House_Roof} />
                          </group>
                          <group name="Chimney001" position={[-0.75, 0.5, 2.5]} scale={[0.25, 0.25, 0.5]}>
                            <mesh name="Chimney001_House_Chimney_0" geometry={nodes.Chimney001_House_Chimney_0.geometry} material={materials.House_Chimney} />
                          </group>
                        </group>
                      </group>
                      <group name="House_Parent000" rotation={[2.361, 0.986, -0.699]}>
                        <group name="House000" position={[0, 0, 1.051]} rotation={[0, 0, 0.236]} scale={0.032}>
                          <group name="Chimney" position={[-0.75, 0.5, 2.5]} scale={[0.25, 0.25, 0.5]}>
                            <mesh name="Chimney_House_Chimney_0" geometry={nodes.Chimney_House_Chimney_0.geometry} material={materials.House_Chimney} />
                          </group>
                          <group name="Roof" position={[0, 0, 2.333]} rotation={[Math.PI / 2, 1.571, 0]} scale={[0.825, 0.476, 0.833]}>
                            <mesh name="Roof_House_Roof_0" geometry={nodes.Roof_House_Roof_0.geometry} material={materials.House_Roof} />
                          </group>
                          <group name="Base" position={[0, 0, 1]} scale={[1.25, 1, 1]}>
                            <mesh name="Base_House_0" geometry={nodes.Base_House_0.geometry} material={materials.House} />
                            <mesh name="Base_House_Door_0" geometry={nodes.Base_House_Door_0.geometry} material={materials.House_Door} />
                          </group>
                        </group>
                      </group>
                    </group>
                    <group name="000_Buildings">
                      <group name="Building_Parent010" rotation={[1.606, 0.441, -1.586]}>
                        <group name="Building010" position={[0, 0, 1.066]} rotation={[0, 0, 0.733]} scale={[0.021, 0.021, 0.042]}>
                          <mesh name="Building010_Skyscraper_0" geometry={nodes.Building010_Skyscraper_0.geometry} material={materials.Skyscraper} />
                          <mesh name="Building010_SkyscraperWindow_0" geometry={nodes.Building010_SkyscraperWindow_0.geometry} material={materials.SkyscraperWindow} />
                        </group>
                      </group>
                      <group name="Building_Parent009" rotation={[1.718, 0.811, -1.678]}>
                        <group name="Building009" position={[0, 0, 1.071]} rotation={[0, 0, 0.73]} scale={[0.017, 0.017, 0.033]}>
                          <mesh name="Building009_Skyscraper_0" geometry={nodes.Building009_Skyscraper_0.geometry} material={materials.Skyscraper} />
                          <mesh name="Building009_SkyscraperWindow_0" geometry={nodes.Building009_SkyscraperWindow_0.geometry} material={materials.SkyscraperWindow} />
                        </group>
                      </group>
                      <group name="Building_Parent008" rotation={[1.563, 0.799, -1.565]}>
                        <group name="Building008" position={[0, 0, 1.071]} rotation={[0, 0, 0.73]} scale={[0.025, 0.025, 0.05]}>
                          <mesh name="Building008_Skyscraper_0" geometry={nodes.Building008_Skyscraper_0.geometry} material={materials.Skyscraper} />
                          <mesh name="Building008_SkyscraperWindow_0" geometry={nodes.Building008_SkyscraperWindow_0.geometry} material={materials.SkyscraperWindow} />
                        </group>
                      </group>
                      <group name="Building_Parent007" rotation={[1.701, 0.449, -1.627]}>
                        <group name="Building007" position={[0, 0, 1.11]} rotation={[0, 0, -0.176]} scale={[0.042, 0.042, 0.083]}>
                          <mesh name="Building007_Skyscraper_0" geometry={nodes.Building007_Skyscraper_0.geometry} material={materials.Skyscraper} />
                          <mesh name="Building007_SkyscraperWindow_0" geometry={nodes.Building007_SkyscraperWindow_0.geometry} material={materials.SkyscraperWindow} />
                        </group>
                      </group>
                      <group name="Building_Parent006" rotation={[1.475, 0.511, -1.524]}>
                        <group name="Building006" position={[0, 0, 1.071]} rotation={[0, 0, 0.946]} scale={[0.025, 0.025, 0.05]}>
                          <mesh name="Building006_Skyscraper_0" geometry={nodes.Building006_Skyscraper_0.geometry} material={materials.Skyscraper} />
                          <mesh name="Building006_SkyscraperWindow_0" geometry={nodes.Building006_SkyscraperWindow_0.geometry} material={materials.SkyscraperWindow} />
                        </group>
                      </group>
                      <group name="Building_Parent005" rotation={[1.442, 0.597, -1.498]}>
                        <group name="Building005" position={[0, 0, 1.088]} rotation={[0, 0, -0.246]} scale={[0.036, 0.036, 0.072]}>
                          <mesh name="Building005_Skyscraper_0" geometry={nodes.Building005_Skyscraper_0.geometry} material={materials.Skyscraper} />
                          <mesh name="Building005_SkyscraperWindow_0" geometry={nodes.Building005_SkyscraperWindow_0.geometry} material={materials.SkyscraperWindow} />
                        </group>
                      </group>
                      <group name="Building_Parent004" rotation={[1.441, 0.718, -1.485]}>
                        <group name="Building004" position={[0, 0, 1.131]} rotation={[0, 0, -0.33]} scale={[0.059, 0.059, 0.118]}>
                          <mesh name="Building004_Skyscraper_0" geometry={nodes.Building004_Skyscraper_0.geometry} material={materials.Skyscraper} />
                          <mesh name="Building004_SkyscraperWindow_0" geometry={nodes.Building004_SkyscraperWindow_0.geometry} material={materials.SkyscraperWindow} />
                        </group>
                      </group>
                      <group name="Building_Parent003" rotation={[1.614, 0.699, -1.599]}>
                        <group name="Building003" position={[0, 0, 1.092]} rotation={[0, 0, -0.492]} scale={[0.035, 0.035, 0.071]}>
                          <mesh name="Building003_Skyscraper_0" geometry={nodes.Building003_Skyscraper_0.geometry} material={materials.Skyscraper} />
                          <mesh name="Building003_SkyscraperWindow_0" geometry={nodes.Building003_SkyscraperWindow_0.geometry} material={materials.SkyscraperWindow} />
                        </group>
                      </group>
                      <group name="Building_Parent002" rotation={[1.749, 0.581, -1.669]}>
                        <group name="Building002" position={[0, 0, 1.117]} rotation={[0, 0, 0.398]} scale={[0.048, 0.048, 0.097]}>
                          <mesh name="Building002_Skyscraper_0" geometry={nodes.Building002_Skyscraper_0.geometry} material={materials.Skyscraper} />
                          <mesh name="Building002_SkyscraperWindow_0" geometry={nodes.Building002_SkyscraperWindow_0.geometry} material={materials.SkyscraperWindow} />
                        </group>
                      </group>
                      <group name="Building_Parent001" rotation={[1.779, 0.7, -1.706]}>
                        <group name="Building001" position={[0, 0, 1.132]} rotation={[0, 0, -0.22]} scale={[0.056, 0.056, 0.113]}>
                          <mesh name="Building001_Skyscraper_0" geometry={nodes.Building001_Skyscraper_0.geometry} material={materials.Skyscraper} />
                          <mesh name="Building001_SkyscraperWindow_0" geometry={nodes.Building001_SkyscraperWindow_0.geometry} material={materials.SkyscraperWindow} />
                        </group>
                      </group>
                      <group name="Building_Parent000" rotation={[1.602, 0.558, -1.587]}>
                        <group name="Building" position={[0, 0, 1.152]} rotation={[0, 0, 0.182]} scale={[0.068, 0.068, 0.136]}>
                          <mesh name="Building_Skyscraper_0" geometry={nodes.Building_Skyscraper_0.geometry} material={materials.Skyscraper} />
                          <mesh name="Building_SkyscraperWindow_0" geometry={nodes.Building_SkyscraperWindow_0.geometry} material={materials.SkyscraperWindow} />
                        </group>
                      </group>
                    </group>
                    <group name="000_Bridges">
                      <group name="Bridge_Parent002" position={[0, 0, 0.17]} rotation={[1.887, -0.061, 0.02]}>
                        <group name="Bridge002" position={[0, 0, 1.077]} rotation={[-0.173, -0.05, 1.896]} scale={0.057}>
                          <group name="0,0,0002" />
                          <group name="Cube002" scale={[1, 0.5, 0.075]}>
                            <mesh name="Cube002_Bridge_0" geometry={nodes.Cube002_Bridge_0.geometry} material={materials.Bridge} />
                            <mesh name="Cube002_Rope_0" geometry={nodes.Cube002_Rope_0.geometry} material={materials.Rope} />
                          </group>
                        </group>
                      </group>
                      <group name="Bridge_Parent001" rotation={[-3.018, 1.217, -1.702]}>
                        <group name="Bridge001" position={[0, 0, 1.063]} rotation={[-0.05, 0.078, 2.14]} scale={0.06}>
                          <group name="0,0,0001" />
                          <group name="Cube001" scale={[1, 0.5, 0.075]}>
                            <mesh name="Cube001_Bridge_0" geometry={nodes.Cube001_Bridge_0.geometry} material={materials.Bridge} />
                            <mesh name="Cube001_Rope_0" geometry={nodes.Cube001_Rope_0.geometry} material={materials.Rope} />
                          </group>
                        </group>
                      </group>
                      <group name="Bridge_Parent000" rotation={[-0.853, -0.329, -2.866]}>
                        <group name="Bridge000" position={[0, 0, 1.025]} rotation={[-0.029, -0.006, 0.19]} scale={0.075}>
                          <group name="0,0,0" />
                          <group name="Cube" scale={[0.802, 0.401, 0.06]}>
                            <mesh name="Cube_Bridge_0" geometry={nodes.Cube_Bridge_0.geometry} material={materials.Bridge} />
                            <mesh name="Cube_Rope_0" geometry={nodes.Cube_Rope_0.geometry} material={materials.Rope} />
                          </group>
                        </group>
                      </group>
                    </group>
                    <group name="000_Pyramids">
                      <group name="Pyramid_Parent002" rotation={[2.188, -1.333, 2.201]}>
                        <group name="Cone002" position={[0, 0, 1.07]} rotation={[0, 0, 1]} scale={[0.113, 0.113, 0.165]}>
                          <mesh name="Cone002_Pyramid_0" geometry={nodes.Cone002_Pyramid_0.geometry} material={materials.Pyramid} />
                        </group>
                      </group>
                      <group name="Pyramid_Parent001" rotation={[3.009, -1.235, 3.016]}>
                        <group name="Cone001" position={[0, 0, 1.13]} rotation={[0, 0, 1]} scale={[0.134, 0.134, 0.196]}>
                          <mesh name="Cone001_Pyramid_0" geometry={nodes.Cone001_Pyramid_0.geometry} material={materials.Pyramid} />
                        </group>
                      </group>
                      <group name="Pyramid_Parent000" rotation={[2.211, -1.046, 2.282]}>
                        <group name="Cone003" position={[0, 0, 1.13]} rotation={[0, 0, 0.468]} scale={[0.195, 0.195, 0.285]}>
                          <mesh name="Cone003_Pyramid_0" geometry={nodes.Cone003_Pyramid_0.geometry} material={materials.Pyramid} />
                        </group>
                      </group>
                    </group>
                    <group name="Planet">
                      <mesh name="Planet_Snow_0" geometry={nodes.Planet_Snow_0.geometry} material={materials.Snow} />
                      <mesh name="Planet_Grass_0" geometry={nodes.Planet_Grass_0.geometry} material={materials.Grass} />
                      <mesh name="Planet_Water_0" geometry={nodes.Planet_Water_0.geometry} material={materials.Water} />
                      <mesh name="Planet_Sand_0" geometry={nodes.Planet_Sand_0.geometry} material={materials.Sand} />
                      <mesh name="Planet_MountainMid_0" geometry={nodes.Planet_MountainMid_0.geometry} material={materials.MountainMid} />
                      <mesh name="Planet_MountainNorth_0" geometry={nodes.Planet_MountainNorth_0.geometry} material={materials.MountainNorth} />
                      <mesh name="Planet_MountainMidTop_0" geometry={nodes.Planet_MountainMidTop_0.geometry} material={materials.MountainMidTop} />
                      <mesh name="Planet_Asphalt_0" geometry={nodes.Planet_Asphalt_0.geometry} material={materials.Asphalt} />
                    </group>
                    <group name="Material_Cube">
                      <mesh name="Material_Cube_Asphalt_0" geometry={nodes.Material_Cube_Asphalt_0.geometry} material={materials.Asphalt} />
                    </group>
                  </group>
                  <group name="Palm_Tree029" position={[41.819, -37.914, 101.188]} rotation={[1.279, -1.002, -1.083]} scale={[6.898, 2.708, 2.299]} />
                  <group name="Palm_Tree028" position={[29.696, -46.573, 101.855]} rotation={[0.91, -1.28, -1.456]} scale={[6.898, 2.708, 2.299]} />
                  <group name="Palm_Tree027" position={[3.931, -49.882, 104.507]} rotation={[-0.989, -1.325, 2.933]} scale={[6.898, 2.708, 2.299]} />
                  <group name="Palm_Tree026" position={[-9.226, -53.322, 102.455]} rotation={[-1.26, -1.127, 2.606]} scale={[6.898, 2.708, 2.299]} />
                  <group name="Palm_Tree025" position={[-28.594, -54.575, 98.129]} rotation={[-1.333, -0.808, 2.427]} scale={[6.898, 2.708, 2.299]} />
                  <group name="Palm_Tree024" position={[-25.76, -31.159, 108.586]} rotation={[-2.33, -1.312, 1.739]} scale={[6.898, 2.708, 2.299]} />
                  <group name="Palm_Tree023" position={[30.852, 4.448, 111.596]} rotation={[-0.648, -1.246, -2.503]} scale={[6.898, 2.708, 2.299]} />
                  <group name="Palm_Tree022" position={[-1.904, 10.904, 115.338]} rotation={[-1.676, -0.587, 2.773]} scale={[6.898, 2.708, 2.299]} />
                  <group name="Palm_Tree021" position={[11.586, 8.486, 114.974]} rotation={[-1.335, -1.252, 3.117]} scale={[6.898, 2.708, 2.299]} />
                  <group name="Palm_Tree020" position={[22.031, 14.923, 112.771]} rotation={[1.276, -0.697, -0.6]} scale={[6.898, 2.708, 2.299]} />
                  <group name="Palm_Tree019" position={[17.418, 24.881, 111.816]} rotation={[1.372, 0.135, -0.501]} scale={[6.898, 2.708, 2.299]} />
                  <group name="Palm_Tree018" position={[2.495, 20.916, 113.937]} rotation={[1.402, 0.531, -0.374]} scale={[6.898, 2.708, 2.299]} />
                  <group name="Palm_Tree017" position={[-12.714, 13.92, 114.324]} rotation={[1.333, 0.813, -0.189]} scale={[6.898, 2.708, 2.299]} />
                  <group name="Palm_Tree016" position={[-22.792, 1.82, 113.59]} rotation={[1.321, 0.857, -0.044]} scale={[6.898, 2.708, 2.299]} />
                  <group name="Palm_Tree015" position={[-52.041, -7.275, 103.267]} rotation={[1.625, 0.031, 0.117]} scale={[6.898, 2.708, 2.299]} />
                  <group name="Palm_Tree014" position={[-64.406, -7.275, 96.043]} rotation={[1.362, 0.397, 0.298]} scale={[6.898, 2.708, 2.299]} />
                  <group name="Palm_Tree013" position={[-80.927, -54.039, 62.896]} rotation={[0.248, 0.742, 1.546]} scale={[6.898, 2.708, 2.299]} />
                  <group name="Palm_Tree012" position={[-66.931, -63.952, 69.683]} rotation={[1.179, 0.908, 0.87]} scale={[6.898, 2.708, 2.299]} />
                  <group name="Palm_Tree011" position={[-56.189, -69.892, 73.37]} rotation={[1.97, 0.568, 0.264]} scale={[6.898, 2.708, 2.299]} />
                  <group name="Palm_Tree010" position={[-46.505, -74.836, 75.247]} rotation={[-2.879, -1.103, 0.75]} scale={[6.898, 2.708, 2.299]} />
                  <group name="Palm_Tree009" position={[-61.246, -72.629, 66.328]} rotation={[-1.275, -0.686, 2.041]} scale={[6.898, 2.708, 2.299]} />
                  <group name="Palm_Tree008" position={[-76.794, -63.502, 59.123]} rotation={[-2.154, -0.839, 1.346]} scale={[6.898, 2.708, 2.299]} />
                  <group name="Palm_Tree007" position={[-86.528, -57.397, 51.418]} rotation={[-1.418, -0.515, 1.761]} scale={[6.898, 2.708, 2.299]} />
                  <group name="Palm_Tree006" position={[-100.852, 3.235, 56.953]} rotation={[-1.695, -0.038, 1.735]} scale={[6.898, 2.708, 2.299]} />
                  <group name="Palm_Tree005" position={[-81.135, 11.91, 81.858]} rotation={[-2.081, -0.35, 1.951]} scale={[6.898, 2.708, 2.299]} />
                  <group name="Palm_Tree004" position={[-90.372, 15.925, 70.744]} rotation={[-1.663, 0.103, 1.891]} scale={[6.898, 2.708, 2.299]} />
                  <group name="Palm_Tree003" position={[-100.597, 12.514, 56.116]} rotation={[0.116, 0.495, 1.057]} scale={[6.898, 2.708, 2.299]} />
                  <group name="Palm_Tree002" position={[-88.024, 25.473, 70.91]} rotation={[1.227, -0.001, 0.514]} scale={[6.898, 2.708, 2.299]} />
                  <group name="Palm_Tree001" position={[-78.905, 22.307, 81.864]} rotation={[1.444, -0.148, 0.41]} scale={[6.898, 2.708, 2.299]} />
                  <group name="Palm_Tree000" position={[-95.729, 22.307, 61.349]} rotation={[0.852, 0.242, 0.669]} scale={[6.898, 2.708, 2.299]} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </animated.mesh>
    </group>
  )
})

useGLTF.preload('/models/cute_little_planet/scene.gltf')
