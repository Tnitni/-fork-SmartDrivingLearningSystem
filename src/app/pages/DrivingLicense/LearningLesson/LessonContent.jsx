import './LessonContent.css';

export default function LessonContent({
  lesson = {},
  progress = null,
}) {
  const maxScore = progress?.[0]?.score;
  const isLocked = progress?.length == 0;
  const isPassed = maxScore >= 50;

  const markLessonContentComplete = async () => {
    // const currentUserId = Number(user?.id || 1);
    // const currentLessonId = Number(ThisQuestionLesson?.id || lessonId);

    // // API-ready (enable when backend is available):
    // // await putData(`lesson-progress/${currentLessonId}`, { status: 1 }, user?.token || '');

    // setLessonProgressList(prev => {
    //   const existing = prev.find(
    //     lp => Number(lp.userId) === currentUserId && Number(lp.questionLessonId) === currentLessonId,
    //   );

    //   if (existing) {
    //     return prev.map(lp => (
    //       Number(lp.userId) === currentUserId && Number(lp.questionLessonId) === currentLessonId
    //         ? { ...lp, status: 1 }
    //         : lp
    //     ));
    //   }

    //   return [
    //     ...prev,
    //     {
    //       id: Date.now(),
    //       userId: currentUserId,
    //       questionLessonId: currentLessonId,
    //       status: 1,
    //     },
    //   ];
    // });

    // setProgress(prev => ({
    //   ...(prev || {}),
    //   status: 1,
    //   theory_completed: true,
    // }));
  };

  return (
    <div className='lesson-content-viewer'>
      <div className='header'>
        <div className='title'>
          <div className='icon-box'>
            <i className='fa-solid fa-book-open' />
          </div>
          <div>
            <h2>Lesson Content</h2>
            <p>HTML lesson content</p>
          </div>
        </div>
        {!isLocked && (
          <div className='completed'>
            <span>Completed</span>
          </div>
        )}
      </div>

      {lesson?.content ? (
        <>
          <div className='lesson-content-detail'>
            <h3>{lesson?.name || 'Lesson'}</h3>
            <div
              className='lesson-content-body'
              dangerouslySetInnerHTML={{ __html: lesson?.content }}
            />
          </div>

          {isLocked && (
            <div className='footer'>
              <button
                onClick={markLessonContentComplete}
                className='complete-button compact'
              >
                <i className='fa-regular fa-check-circle' />
                <span>Mark Complete</span>
              </button>
            </div>
          )}
        </>
      ) : (
        <div className='empty'>
          <div className='empty-icon' />
          <p>No lesson content available</p>
        </div>
      )}
    </div>
  );
}