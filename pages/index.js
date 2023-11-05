import Image from "next/image";
import styles from "../styles/Home.module.css";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";

import { useSession, signIn } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // useEffect(() => {
  //   if (status === "unauthenticated") {
  //     router.push('/login')
  //   }
  // }, [status, router]);
  const handleClick = () => {
    if (status === "unauthenticated") {
      router.push('/login')
    }
  }

  return (
    <div className={styles.container}>
      <Container>
        <div className="row custom-gutter">
          <div className="col-md-6">
            <video width="100%" height="auto" controls className="rounded-box">
              <source src="/vercel.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="testimonies rounded-box">
              <Carousel
                data-bs-theme="dark"
                indicators={false}
                prevIcon={
                  <span
                    aria-hidden="true"
                    className="carousel-control-prev-icon"
                  />
                }
                nextIcon={
                  <span
                    aria-hidden="true"
                    className="carousel-control-next-icon"
                  />
                }>
                <Carousel.Item>
                  <Image
                    src="/testimonial.png"
                    width={62}
                    height={62}
                    alt="change it"
                  />
                  <Carousel.Caption>
                    <h3>Julie Ruberta</h3>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                      Nulla vitae elit libero, a pharetra augue mollis interdum
                      Nulla vitae elit libero, commodo cursus magna, vel
                      scelerisque nisl consectetur. Praesent commodo a pharetra
                      augue mollis interdumNulla vitae elit libero, a pharetra
                      augue mollis interdumNulla vitae elit libero, a pharetra
                      augue mollis interdum
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    src="/testimonial.png"
                    width={62}
                    height={62}
                    alt="change it"
                  />
                  <Carousel.Caption>
                    <h3>Julie Ruberta</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                      scelerisque nisl consectetur. Praesent commodo curs
                      consectetur, vel scelerisque nisl consectetur. Praesent
                      commodo cursus magna, vel scelerisque nisl consectetur.
                      Praesent commodo curs consectetur, vel scelerisque nisl
                      consectetur. Praesent commodo cursus magna, vel.Lorem
                      ipsum dolor sit amet.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    src="/testimonial.png"
                    width={62}
                    height={62}
                    alt="change it"
                  />
                  <Carousel.Caption>
                    <h3>Julie Ruberta</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur. Praesent commodo curs consectetur, vel
                      scelerisque nisl consectetur. Praesent commodo cursus
                      magna, vel scelerisque nisl consectetur. Praesent commodo
                      cursus magna, vel scelerisque nisl consectetur scelerisque
                      nisl consectetur. Praesent commodo curs consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
          <div className="col-md-6">
            <div className="upload-cv rounded-box" onClick={handleClick}>
              <Image
                src="/cv-icon.png"
                alt="upload cv"
                width={94}
                height={94}
              />
              <h2>Upload CV</h2>
              <p>( PDF or DOCX )</p>
            </div>
            <div className="create-cv rounded-box" onClick={handleClick}>
              <h2>Create CV with AI</h2>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
