import {use} from "react";
export default function Friends({friendsPromise}) {

    const Friends = use(friendsPromise)
    return (
        <div className="card">
            <h3>Friends</h3>
        </div>
    )
}