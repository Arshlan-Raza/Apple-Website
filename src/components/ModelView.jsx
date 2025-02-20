import { View } from "@react-three/drei";
import Lights from "./Lights";
import { Suspense } from "react";
import IPhone from "./IPhone";
import { PerspectiveCamera } from "@react-three/drei";

const ModelView = ({index,groupRef,gsapType,controlRef,
    setRotationSize,size,item}) => {
  return (
    <View
    index={index}
    id={gsapType}
    className={`w-full h-full absolute 
        ${index === 2 ? 'right-[-100%]' : ''}`}
    >
        {/*Ambient Ligh*/}
        <ambientLight intensity={0.3} />
        
        <PerspectiveCamera makeDefault position={[0, 0, 4]} />
        <Lights/>

        <Suspense fallback={<div>Loading</div>}>
            <IPhone/>
        </Suspense>

    </View>
  )
}

export default ModelView