import { useEffect, useState } from 'react'

import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss'

const apiUrl = 'https://api.github.com/users/scarvalhos/repos'

export function RepositoryList() {
    const [repositories, setRepositories] = useState([])

    useEffect(() => {
        fetch(apiUrl)
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, [])

    return (
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>

            <ul>
                {repositories.map(repository => ( 
                    <RepositoryItem key={repository.id} repository={repository} />
                ))}
            </ul>
        </section>
    )
}
