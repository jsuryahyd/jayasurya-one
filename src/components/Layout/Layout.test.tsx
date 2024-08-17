// Generated by CodiumAI

describe('Layout', () => {

    // Renders header with correct links and text
    it('should render header with correct links and text', () => {
      const { getByText } = render(() => <Layout />);
      const nameLink = getByText('Jaya Surya');
      const resumeLink = getByText('Resume / CV');
  
      expect(nameLink).toBeInTheDocument();
      expect(nameLink).toHaveAttribute('href', 'https://docs.google.com/document/d/1OXNuIQdYByfBYvVxUXxjmP0cVLzuAt5SXSpJ_SpW71U/edit?usp=sharing');
      expect(resumeLink).toBeInTheDocument();
      expect(resumeLink).toHaveAttribute('href', 'https://drive.google.com/file/d/15W_VI0AolmRHb4tC0LEhkMpJH1gU3T4K/view');
    });

    // Handles missing or broken image links gracefully
    it('should handle missing or broken image links gracefully', () => {
      const { getByAltText } = render(() => <Layout />);
      const githubImage = getByAltText('github');
      const soImage = getByAltText('stackoverflow');
  
      expect(githubImage).toBeInTheDocument();
      expect(soImage).toBeInTheDocument();
  
      fireEvent.error(githubImage);
      fireEvent.error(soImage);
  
      expect(githubImage.src).toContain('fallback-image.svg');
      expect(soImage.src).toContain('fallback-image.svg');
    });
});
