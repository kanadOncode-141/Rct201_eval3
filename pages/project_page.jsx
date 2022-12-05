import Link from 'next/link';
import React from 'react'

const project_page = ({da}) => {
    console.log(da);
  return (
    <div>
        {da.map((d)=>(
            <div key={d.id}  style={{border:"1px solid red"}}>
                <h>{d.name}</h>--
                <Link href={d.html_url}>project link</Link>
                <div>
                    <p>stat count-{d.stargazers_count}</p>
                </div>
                <div>
                    <p>fork count-{d.forks_count}</p>
                </div>
            </div>
        ))
        }
    </div>
  )
}

export async function getServerSideProps(){
    let res = await fetch("https://api.github.com/search/repositories?q=user:kanadOncode-141+fork:true&sort=updated&per_page=10&type=Repositories")
    let data = await res.json();
    let s1 = data.items
    return{
        props:{
            da: s1,
        },
    };
}

export default project_page;