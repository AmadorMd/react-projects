import './App.css'
import { TwitterFollowCard } from './twitterFollowCard';
export function App(){
    const users = [
        {
            userName: 'midudev',
            name: 'Miguel Ángel Durán',
            isFollowing: true
        },
        {
            userName: 'amadormd',
            name: 'Luis Amador Marroquin',
            isFollowing: true
        },
        {
            userName: 'unknowk',
            name: 'desconocido',
            isFollowing: false
        }
    ];
    return(
        <div className='App'>
            {
                users.map(({ userName, name, isFollowing }) => {
                    return (
                        <TwitterFollowCard
                        key={userName} 
                        userName={userName} initialIsFollowing={isFollowing}>
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }
        </div>
    );
}