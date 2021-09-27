export function RepositoryItem({ repository }) {
    return (
        <li>
            <strong>{repository.name}</strong>
            <p>{repository.full_name}</p>

            <a href={repository.html_url}>Acessar Repositórios</a>
        </li>
    )
}
