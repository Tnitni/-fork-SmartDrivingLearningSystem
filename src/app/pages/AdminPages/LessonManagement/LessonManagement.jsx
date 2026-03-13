import { useEffect, useState } from "react";
import { fetchData, putData } from "../../../../mocks/CallingAPI";
import {
  questionChapters,
  questionLessons,
} from "../../../../mocks/DataSample";
import ConfirmDialog from "../../../components/ConfirmDialog/ConfirmDialog";
import MovingLabelInput from "../../../components/MovingLabelInput/MovingLabelInput";
import StyleLabelSelect from "../../../components/StyleLabelSelect/StyleLabelSelect";
import EditLessonModal from "./EditLessonModal";
import TrafficLight from "../../../components/TrafficLight/TrafficLight";
import { useAuth } from "../../../hooks/AuthContext/AuthContext";
import "./LessonManagement.css";
export default function LessonManagement() {
  const { user } = useAuth();

  const [LESSONs, setLESSONs] = useState([]);
  const [QUESTIONCHAPTERs, setQUESTIONCHAPTERs] = useState([]);
  const [refresh, setRefresh] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      setError(null);
      setLoading(true);
      try {
        const chapterResponse = questionChapters;
        const lessonResponse = questionLessons;

        const lessonsWithChapter = lessonResponse.map((lesson) => ({
          ...lesson,
          chapter:
            chapterResponse.find(
              (c) => String(c.id) === String(lesson.questionChapterId),
            ) || null,
        }));

        setQUESTIONCHAPTERs(chapterResponse);
        setLESSONs(lessonsWithChapter);
      } catch (e) {
        setError("Error");
      } finally {
        setLoading(false);
      }
    })();
  }, [refresh, user?.token]);

  if (loading)
    return (
      <div className="admin-container">
        <TrafficLight text={"loading"} setRefresh={() => {}} />
      </div>
    );
  if (error)
    return (
      <div className="admin-container">
        <TrafficLight text={"error"} setRefresh={setRefresh} />
      </div>
    );

  return (
  <div className="admin-container">

  </div>
  );
  
}
