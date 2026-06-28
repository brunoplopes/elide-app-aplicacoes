FROM gradle:8.14-jdk21-alpine

WORKDIR /workspace
COPY . .

EXPOSE 8080
CMD ["gradle", "bootRun", "--no-daemon"]

