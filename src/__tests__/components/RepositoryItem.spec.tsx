import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { faker } from '@faker-js/faker'

import { RepositoryItem } from '../../components/RepositoryItem'

describe('RepositoryItem', () => {
  it('should render component', () => {
    const repository = {
      description: faker.lorem.sentence(5),
      html_url: faker.internet.url(),
      name: faker.internet.userName()
    };

    render(<RepositoryItem repository={repository} />);

    expect(screen.getByText(repository.name)).toBeInTheDocument();
    expect(screen.getByText(repository.description)).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', repository.html_url);
  })
})
