import { describe, it, expect, vi } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import { faker } from '@faker-js/faker'

import { RepositoryList } from '../../components/RepositoryList'
import { GithubApi, Repository } from '../../services/github'

describe('RepositoryList', () => {
  it('should render component', async () => {
    const repositories: Repository[] = [...Array(5).keys()].map(x => {
      return {
        description: faker.lorem.sentence(5),
        html_url: faker.internet.url(),
        name: faker.random.word()
      }
    });

    GithubApi.getRepos = vi.fn().mockImplementation(() =>
      Promise.resolve(repositories));

    render(<RepositoryList />);

    await waitFor(() => {
      expect(screen.queryByText(repositories[0].name)).toBeInTheDocument();
    })

    expect(screen.queryAllByRole('listitem')).toHaveLength(5);
    expect(GithubApi.getRepos).toHaveBeenCalled();
  })
})
