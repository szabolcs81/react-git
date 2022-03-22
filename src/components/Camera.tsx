import * as React from "react";

const Camera = () => {
  const [list, setList] = React.useState<null | MediaDeviceInfo[]>(null);

  const listCameras = async () => {
    try {
      const list = await navigator.mediaDevices.enumerateDevices();
      console.log(list);
      setList(list);
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    listCameras();
  }, []);

  return (
    <div>
      <h1>Cameras</h1>
      {list &&
        list.map((item, index) => (
          <div key={index}>{item.kind + " : " + item.label + " : " + item.toJSON}</div>
        ))}
    </div>
  );
};

export default Camera;
