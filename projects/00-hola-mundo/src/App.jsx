import './App.css'
import { TwitterFollowCard } from './twitterFollowCard';
export function App(){
    return(
        <div className='App'>
            <TwitterFollowCard userName='midudev' name='Miguel Àngel Durán' />
            <TwitterFollowCard userName='amadormd' name='Luis Amador Marroquín' />
        </div>
    );
}