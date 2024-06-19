import React from 'react';
import { StyledFeaturedTasks, TaskCard } from './FeaturedTasks.styled';

const FeaturedTasks = () => {
  return (
    <StyledFeaturedTasks>
      <TaskCard>
        <h4>Image Tagging</h4>
        <p>Help annotate images for object recognition algorithms.</p>
      </TaskCard>
      <TaskCard>
        <h4>Text Transcription</h4>
        <p>Transcribe text from images to improve OCR (Optical Character Recognition) models.</p>
      </TaskCard>
      <TaskCard>
        <h4>Sentiment Analysis</h4>
        <p>Analyze and label sentiment in text data for natural language processing.</p>
      </TaskCard>
    </StyledFeaturedTasks>
  );
};

export default FeaturedTasks;
