//import React from 'react';

const getQuestionsForTopic = (topic) => {
    const questions = {
      Geography: [
        {
            questionText: "1. What is the capitol of Afghanistan?",
            options: [
              'Tehran',
              'Kabul',
              'Dushanbe',
              'Tashkent'
            ],
            correctAnswer: 'Kabul',
          },
          {
            questionText: '2. What continent is Suriname in?',
            options: [
              'Africa',
              'Europe',
              'Asia',
              'South America'
            ],
            correctAnswer: 'South America',
          },
          {
            questionText: '3. What is the capitol of Trinidad and Tobago?',
            options: [
              'Port of Spain',
              'Kingston',
              'Toronto',
              'E=mc^2'
            ],
            correctAnswer: 'Port of Spain',
          },
          {
            questionText: '4. Which of the following countries is NOT in Asia?',
            options: [
              'Uzbekistan',
              'Armenia',
              'Thailand',
              'Algeria'
            ],
            correctAnswer: 'Algeria',
          },
          {
            questionText: '5. What is the capitol of Krygyzstan',
            options: [
              'Tashkent',
              'Bishkek',
              'Astana',
              'Dubai'
            ],
            correctAnswer: 'Bishkek',
          },
      ],
      Languages: [
        {
            questionText: "1. What are the two national languages of Afghanistan?",
            options: [
              'Farsi and Pashto',
              'Arabic and Farsi',
              'Pashto and Urdu/Hindi',
              'Uzbek and Balochi'
            ],
            correctAnswer: 'Farsi and Pashto',
          },
          {
            questionText: 'In what language family (of the following) is English?',
            options: [
              'Germanic',
              'Romance',
              'Semitic',
              'Iranic'
            ],
            correctAnswer: 'Germanic',
          },
          {
            questionText: 'What is the national language of the United States?',
            options: [
              'No national language',
              'English',
              'Latin',
              'Aramaic'
            ],
            correctAnswer: 'No national language',
          },
          {
            questionText: 'What is the oldest spoken language?',
            options: [
              'Tamil',
              'Sanskrit',
              'Latin',
              'Hebrew'
            ],
            correctAnswer: 'Tamil',
          },
          {
            questionText: 'What was the oldest writing system?',
            options: [
              'Cunieform',
              'Hieroglyphs',
              'Abjad',
              'Phoenician'
            ],
            correctAnswer: 'Cunieform',
          },
      ],
    };
  
    return questions[topic] || [];
  };
  
  export default getQuestionsForTopic;
