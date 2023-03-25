// stylesheet
import style from "@/styles/generate_api_form.module.css";

// react-bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";

// next
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

//react
import { useState, useEffect } from "react";

// react-loader
import { RevolvingDot } from "react-loader-spinner";

// Assets
import formIllustration from "@/Assets/Images/form-illustration.png";

// react codeblock
import { CodeBlock, dracula } from "react-code-blocks";

// monaco editor
import Editor from "@monaco-editor/react";

// react icons
import { IoChevronBackSharp } from "react-icons/io5";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { BsCodeSquare } from "react-icons/bs";
import { CgToolbox } from "react-icons/cg";
import { TbDatabase } from "react-icons/tb";

function GenerateAPIForm() {
  const [showForm, setShowForm] = useState(true);
  const [loading, setShowLoading] = useState(false);
  const [code, setCode] = useState({
    language: "",
    code: "",
  });
  const [formData, setFormData] = useState({
    model_name: "",
    language: "",
    framework: "",
    backend: "",
  });

  function handleEditorChange(value, event) {
    console.log("here is the current model value:", value);
  }

  const generateAPI = async (e) => {
    e.preventDefault();

    setShowLoading(true);
    const res = await fetch("http://127.0.0.1:8000/generate_api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    setCode(data);
    setShowForm(false);
    setShowLoading(false);
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Container className={`p-0 m-0 ${style.container}`} fluid>
        {showForm === true ? (
          <>
            <Row className="">
              {/* Illustration */}
              <Col
                className={` ${style.illustrationContainer} p-0 m-0 d-none d-lg-flex justify-content-center align-items-center`}
                lg={4}
              >
                <Image
                  className={style.illustration}
                  src={formIllustration}
                  alt="image"
                />
              </Col>
              {/* Form */}
              <Col className={``}>
                {/* back button */}
                <Container className="p-4" fluid>
                  <Link className={style.link} href="/">
                    <Stack
                      direction="horizontal"
                      className=" justify-content-start align-content-center"
                    >
                      <IoChevronBackSharp className={style.backArrow} />
                      <p className={` ${style.backText} mb-0`}>Back</p>
                    </Stack>
                  </Link>
                </Container>
                {/* form title */}
                <Container fluid>
                  <Stack
                    className="justify-content-center align-items-center"
                    gap={2}
                  >
                    <h2 className={style.formTitle}>
                      Experience the ease and efficiency of Beanstalk
                    </h2>
                    <p className={style.formSubtitle}>
                      Don't waste any more time writing API code from scratch!
                      Let Beanstalk's AI-powered application generate it for you
                      in seconds
                    </p>
                  </Stack>
                </Container>
                {/* Form */}
                <Container
                  className="d-flex justify-content-center align-items-center"
                  fluid
                >
                  <form
                    id="generate-api-form"
                    onSubmit={(e) => generateAPI(e)}
                    className={`${style.form_container}`}
                  >
                    <Stack
                      className="p-4 justify-content-center align-items-center"
                      gap={3}
                    >
                      {/* Model Name */}
                      <div
                        className={`${style.inputContainer} p-2 d-flex align-items-center`}
                      >
                        <Stack
                          className="justify-content-center align-items-center"
                          direction="horizontal"
                          gap={2}
                        >
                          <MdDriveFileRenameOutline
                            style={{ height: "20px", width: "20px" }}
                          />
                          <div className={style.divider} />
                          <Stack
                            className="justify-content-start align-items-start"
                            gap={1}
                          >
                            <p className={`mb-0 ${style.formLabel}`}>
                              Model name
                            </p>
                            <input
                              value={formData.model_name}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  model_name: e.target.value,
                                })
                              }
                              className={style.formInput}
                              type="text"
                            />
                          </Stack>
                        </Stack>
                      </div>
                      {/* Language */}
                      <div
                        className={`${style.inputContainer} p-2 d-flex align-items-center`}
                      >
                        <Stack
                          className="justify-content-center align-items-center"
                          direction="horizontal"
                          gap={2}
                        >
                          <BsCodeSquare
                            style={{ height: "20px", width: "20px" }}
                          />
                          <div className={style.divider} />
                          <Stack
                            className="justify-content-start align-items-start"
                            gap={1}
                          >
                            <p className={`mb-0 ${style.formLabel}`}>
                              Language
                            </p>
                            <input
                              value={formData.language}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  language: e.target.value,
                                })
                              }
                              className={style.formInput}
                              type="text"
                            />
                          </Stack>
                        </Stack>
                      </div>
                      {/* framework */}
                      <div
                        className={`${style.inputContainer} p-2 d-flex align-items-center`}
                      >
                        <Stack
                          className="justify-content-center align-items-center"
                          direction="horizontal"
                          gap={2}
                        >
                          <CgToolbox
                            style={{ height: "20px", width: "20px" }}
                          />
                          <div className={style.divider} />
                          <Stack
                            className="justify-content-start align-items-start"
                            gap={1}
                          >
                            <p className={`mb-0 ${style.formLabel}`}>
                              Framework
                            </p>
                            <input
                              value={formData.framework}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  framework: e.target.value,
                                })
                              }
                              className={style.formInput}
                              type="text"
                            />
                          </Stack>
                        </Stack>
                      </div>
                      {/* Database */}
                      <div
                        className={`${style.inputContainer} p-2 d-flex align-items-center`}
                      >
                        <Stack
                          className="justify-content-center align-items-center"
                          direction="horizontal"
                          gap={2}
                        >
                          <TbDatabase
                            style={{ height: "20px", width: "20px" }}
                          />
                          <div className={style.divider} />
                          <Stack
                            className="justify-content-start align-items-start"
                            gap={1}
                          >
                            <p className={`mb-0 ${style.formLabel}`}>
                              Database
                            </p>
                            <input
                              value={formData.backend}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  backend: e.target.value,
                                })
                              }
                              className={style.formInput}
                              type="text"
                            />
                          </Stack>
                        </Stack>
                      </div>
                      <button className={style.submitButton} type="submit">
                        {loading === true ? (
                          <>
                            <RevolvingDot
                              height="100"
                              width="100"
                              radius="12"
                              color="#33c481"
                              secondaryColor=""
                              ariaLabel="revolving-dot-loading"
                              wrapperStyle={{}}
                              wrapperClass=""
                              visible={true}
                            />
                          </>
                        ) : (
                          <>Generate API</>
                        )}
                      </button>
                    </Stack>
                  </form>
                </Container>
              </Col>
            </Row>
          </>
        ) : (
          <>
            {loading != true ? (
              <>
                <Editor
                  height="90vh"
                  defaultLanguage={code.language}
                  defaultValue={`${code.code.slice(1, -1)}`}
                  theme="vs-dark"
                  onChange={handleEditorChange}
                />
              </>
            ) : (
              <></>
            )}
          </>
        )}
      </Container>
    </>
  );
}

export default GenerateAPIForm;
