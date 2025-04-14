import React from 'react';
import './QuickTips.css';  // Make sure to create this CSS file for styling

const QuickTips = () => {
  return (
    <div className="quick-tips">
      <h2>Quick Tips for Success in your TSA Events</h2>

      <div className="tip">
        <h3>1. Know What You Need</h3>
        <ul>
          <li>Take time to read all the rules carefully.</li>
          <li>Understand what judges expect, including time limits and any reports or presentations you need to prepare.</li>
          <li>Knowing everything upfront makes preparation easier and more efficient.</li>
        </ul>
      </div>

      <div className="tip">
        <h3>2. Manage Your Time</h3>
        <ul>
          <li>Don’t delay make sure to start early to give yourself enough time to solve issues and improve your work.</li>
          <li>Break tasks into smaller parts and set deadlines for each one.</li>
          <li>If you’re working in a team, make sure to assign tasks clearly so everyone knows their role.</li>
        </ul>
      </div>

      <div className="tip">
        <h3>3. Practice Presenting</h3>
        <ul>
          <li>A great project is important, but your presentation matters, too.</li>
          <li>Practice speaking clearly and confidently about your project.</li>
          <li>Be ready to answer tough questions and understand every detail of your work.</li>
        </ul>
      </div>

      <div className="tip">
        <h3>4. Test Thoroughly</h3>
        <ul>
          <li>Avoid surprises by testing your project before you present it to the judges.</li>
          <li>Make sure it works under different conditions not just perfect ones.</li>
          <li>Even if you’re confident, always double-check and be prepared for any issues that might happen.</li>
        </ul>
      </div>

      <div className="tip">
        <h3>5. Stay Confident with Judges</h3>
        <ul>
          <li>It’s normal to feel nervous, but try to stay calm.</li>
          <li>Take a deep breath, speak clearly, and don’t rush through your explanation.</li>
          <li>If you don’t know the answer to a question, it’s okay to admit it.</li>
        </ul>
      </div>
    </div>
  );
}

export default QuickTips;