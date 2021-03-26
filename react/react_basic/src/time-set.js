import React from "react";
function ComponentOnlyOnce(){
    const [time, setTime] = React.useState(0);
    React.useEffect(() => {
        setTime(time+1);
        console.log('컴포넌트가 화면에 처음 렌더링될 때 1번만 실행');
    }, [time]);
    function updateTime(){
        setTime(time+1);
    }
    return(
      <div>
          <h3>{time}초</h3>
          <button onClick={updateTime}>1씩 증가</button>
      </div>
    );
}
export default ComponentOnlyOnce;