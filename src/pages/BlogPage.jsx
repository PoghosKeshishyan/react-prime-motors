import { blogs_page_label_data, blogs_data } from '../databace';
import { useState, useEffect } from 'react';
import { BlogContent } from '../components/BlogContent';

export function BlogPage() {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [blogsLabel, setBlogsLabel] = useState({});
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setCurrentLanguage(localStorage.getItem('primeMotors_lang'));
    loadingData(currentLanguage);
  }, [currentLanguage])

  const loadingData = (currentLanguage) => {
    const filteredBlogsLabel = blogs_page_label_data.filter(item => item.lang === currentLanguage);
    setBlogsLabel(filteredBlogsLabel[0]);

    const filteredBlogs = blogs_data.filter(item => item.lang === currentLanguage);
    setBlogs(filteredBlogs);
  }

  return (
    <div>
      <BlogContent blogsLabel={blogsLabel} blogs={blogs} />
    </div>
  );
}