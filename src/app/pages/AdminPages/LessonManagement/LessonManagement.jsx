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

  const [searchLesson, setSearchLesson] = useState("");
  const [selectChapter, setSelectChapter] = useState("");
  const [selectStatus, setSelectStatus] = useState("");

  const statusOptions = [
    { id: 1, name: "Active" },
    { id: 0, name: "Inactive" },
  ];

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

  const lessonsFilter = LESSONs.filter((lesson) => {
    const matchSearch =
      !searchLesson ||
      lesson.name?.toLowerCase().includes(searchLesson.toLowerCase()) ||
      lesson.description?.toLowerCase().includes(searchLesson.toLowerCase());
    const matchChapter =
      !selectChapter ||
      Number(lesson.questionChapterId) === Number(selectChapter);
    const matchStatus =
      selectStatus === "" || Number(lesson.status) === Number(selectStatus);

    return matchSearch && matchChapter && matchStatus;
  });

  const handleClear = () => {
    setSearchLesson("");
    setSelectChapter("");
    setSelectStatus("");
  };

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
      <div className="inner-container management-container lesson-management-container">
        <header className="main-header">
          <h1>Lesson Management</h1>
          <button className="btn-primary" type="button" disabled>
            <i className="fa-solid fa-plus" />
            Add more lesson
          </button>
        </header>

        <form className="controls">
          <div className="count">{lessonsFilter?.length} results</div>
          <div className="search-bar">
            <MovingLabelInput
              type={"text"}
              value={searchLesson || ""}
              onValueChange={(propE) => setSearchLesson(propE)}
              extraClassName={""}
              extraStyle={{}}
              label={"Name or description"}
              labelStyle={"left moving"}
            />
          </div>
          <div className="field">
            <StyleLabelSelect
              id={"chapter-select"}
              list={QUESTIONCHAPTERs}
              value={selectChapter}
              onValueChange={(propE) => setSelectChapter(propE)}
              extraClassName={""}
              extraStyle={{}}
              label={"Chapter"}
              labelStyle={"left"}
            />
            <StyleLabelSelect
              id={"status-select"}
              list={statusOptions}
              value={selectStatus}
              onValueChange={(propE) => setSelectStatus(propE)}
              extraClassName={""}
              extraStyle={{}}
              label={"Status"}
              labelStyle={"left"}
            />
          </div>
          <button type="button" className="btn-secondary" onClick={handleClear}>
            CLEAR
          </button>
          <button
            type="button"
            className="btn-secondary"
            onClick={() => setRefresh((p) => p + 1)}
          >
            Refresh
          </button>
        </form>

        <section className="admin-table-container">
          <table className="admin-table">
            <thead>
              <tr>
                <th>#</th>
                <th>LESSON</th>
                <th>CHAPTER</th>
                <th>DESCRIPTION</th>
                <th>STATUS</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {lessonsFilter?.map((lesson, index) => (
                <tr key={lesson.id || index}>
                  <td>{index + 1}</td>
                  <td>
                    <div>{lesson.name}</div>
                  </td>
                  <td>
                    <span>{lesson.chapter?.name || "--"}</span>
                  </td>
                  <td>
                    <span>{lesson.description || "--"}</span>
                  </td>
                  <td>
                    <span>{lesson.status == 1 ? "Active" : "Inactive"}</span>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button type="button" disabled>
                        <span>Modify</span>
                        <i className="fa-solid fa-pencil" />
                      </button>
                      <button type="button" className="btn-active" disabled>
                        <span>Active</span>
                        <i className="fa-solid fa-unlock" />
                      </button>
                      <button type="button" className="btn-inactive" disabled>
                        <span>Inactive</span>
                        <i className="fa-solid fa-lock" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
}
