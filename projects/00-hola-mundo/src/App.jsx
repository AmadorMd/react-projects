import './App.css'
import { TwitterFollowCard } from './twitterFollowCard';
export function App(){
    
    return(
        <div className='App'>
            <TwitterFollowCard  userName='midudev' initialIsFollowing={true}> 
                Miguel Àngel Durán
            </TwitterFollowCard>

            <TwitterFollowCard userName='amadormd'> 
                Luis Amador Marroquín
            </TwitterFollowCard>
        </div>
    );
}