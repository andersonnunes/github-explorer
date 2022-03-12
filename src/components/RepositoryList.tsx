import { useEffect, useState } from 'react'
import { GithubApi, Repository } from '../services/github';

import { RepositoryItem } from './RepositoryItem'
import '../styles/global.scss'


export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    GithubApi.getRepos()
      .then(data => setRepositories(data));
  }, []);

  return (
    <section className='repository-list'>
      <h1>Lista de repositórios</h1>

      <ul role='list'>
        {
          repositories.map(repository => (
            <RepositoryItem key={repository.name} repository={repository} />
          ))
        }
      </ul>
    </section>
  );
}
