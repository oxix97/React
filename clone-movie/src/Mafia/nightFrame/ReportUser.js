import React from "react";


const Report = () => {
    
}

const ReportUser = ({history}) => {
    return (
        <div>
            <button onClick={Report}>취재</button>
            <button onClick={() => history.push({
                    pathname: '/policeVote'
                }
            )}>넘어가기
            </button>
            <div>
                취재 결과는 최종 결과창에서 보여집니다.
            </div>
        </div>
    )
}

export default ReportUser;