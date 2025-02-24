import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";
import PageLayout from "@/app/(ui)/page_layout";
export default function Contact() {
  return (
    <PageLayout>
      <div className="relative z-30 h-full w-full flex flex-col items-center justify-center gap-2">
        <div className="flex flex-row gap-4">
          <LocalPhoneIcon /> <p>010-4983-8022</p>
        </div>
        <div className="flex flex-row gap-4">
          <EmailIcon /> <p>ethanleast@gmail.com</p>
        </div>
        <div className="flex flex-row gap-4">
          <GitHubIcon />{" "}
          <Link
            className="text-blue-600 underline-offset-1 underline"
            href={"https://github.com/GyuhaWang"}
          >
            https://github.com/GyuhaWang
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}
