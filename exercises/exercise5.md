```
Ejercicio 5: Arquitectura del backend
Describe cómo estructurarías el backend de una aplicación de comercio electrónico. Habla
sobre las tecnologías que utilizarías, la organización de los archivos, el uso de patrones de
diseño, etc.
```
# Backend Architecture for an E-commerce Application

## Overview
Designing the backend of an e-commerce application involves careful planning to ensure scalability, Due to the security of the billing module and the performance of the query module, I would implement a microservices architecture. This would allow us to choose the technologies that best meet the needs of each module and provide better scalability for server resources both horizontally and vertically. Therefore, for the stack, a range of technologies would be defined per category.

## Technologies
- **Programming Language:** Node.js (TypeScript; Express/Nest), Rust(Actix Web) and Python(FastAPI).
- **Database:** relational: PostgreSQL or CockroachDB; NoSQL: MongoDB or DynamoDB.
- **Authentication:** JWT (JSON Web Tokens)
- **Public API:** GraphQL
- **Caching:** Redis
- **Message Broker:** Apache Kafka with Cap'n Proto
- **Containerization:** Docker
- **CI/CD:** GitHub Actions
- **Cloud Provider:** AWS

## Architecture
For the architecture, I would implement the following patterns:

1. Event-Driven Architecture: This pattern involves the production, detection, consumption, and reaction to events, allowing for loosely coupled systems and asynchronous communication. Events are emitted by producers and consumed by consumers, enabling scalable and resilient systems.
2. Federation of Subgraphs with Apollo Federation: This pattern involves composing a unified graph API from multiple independently developed GraphQL services, known as subgraphs. Apollo Federation provides a way to federate these subgraphs, allowing each service to manage its own domain while enabling seamless composition at the API gateway level. This promotes scalability, autonomy, and modularity in large-scale GraphQL architectures.
3. API Gateway: An API gateway is a server that acts as an entry point into a system and provides a single entry point for multiple microservices. It handles requests from clients, routes them to the appropriate microservice, and aggregates the results before returning them to the client. API gateways can perform various functions such as authentication, rate limiting, logging, and response caching, providing a centralized point for managing and securing microservices-based architectures.
4. CQRS (Command Query Responsibility Segregation): This design pattern separates the responsibilities of handling commands (write operations) from queries (read operations) in an application. By segregating these concerns, CQRS promotes cleaner architecture, scalability, and optimization for both write and read operations.

## Design Patterns
For the design patterns, I would implement the following patterns:
1. Hexagonal Architecture: Also known as Ports and Adapters, this pattern emphasizes the separation of concerns by dividing an application into layers and isolating the core business logic from external concerns such as databases and user interfaces. This promotes maintainability, testability, and flexibility by allowing components to be easily replaced or upgraded.
2. Actor-Based Design Pattern: This design pattern is based on the actor model, where system components (actors) can send messages to each other and perform actions in response to those messages. Each actor has its own internal state and can process messages independently, making it easier to build concurrent and distributed systems.
3. Repository Pattern: The Repository pattern is used to abstract the data access logic from the business logic. It provides a common interface for accessing data stored in a data source, such as a database, hiding the underlying implementation details. This promotes modularity and code reuse by decoupling business logic from storage details.
4. SOLID Principles: SOLID is an acronym representing five software design principles:
    -   S - Single Responsibility Principle (SRP): A class should have only one reason to change, i.e., it should have a single responsibility.
    - O - Open/Closed Principle (OCP): Software entities should be open for extension but closed for modification.
    - L - Liskov Substitution Principle (LSP): Objects in a program should be replaceable with instances of their subtypes without affecting the correctness of the program.
    - I - Interface Segregation Principle (ISP): Clients should not be forced to depend on interfaces they do not use.
    - D - Dependency Inversion Principle (DIP): High-level modules should not depend on low-level modules. Both should depend on abstractions.
5. Decorator Pattern: The Decorator pattern allows adding additional functionality to existing objects dynamically, without modifying their structure. This is achieved by creating decorator classes that wrap base objects and add additional behavior through composition. The Decorator pattern is useful when multiple variations of an object are needed, and you want to avoid creating multiple subclasses.
6. DAO (Data Access Object): The DAO pattern separates the data access logic from the rest of the application. It provides an abstract interface to interact with the database, allowing the application to access and manipulate data without directly coupling to the database implementation. This promotes flexibility and maintainability by isolating database-specific code.
7. DataLoader Pattern: The DataLoader pattern is used to optimize data fetching in applications that use a data source such as a database or an API. It allows batching and caching of data requests, reducing the number of round-trips to the data source and improving performance. By aggregating and coalescing multiple data requests into a single batch request, DataLoader minimizes overhead and maximizes efficiency, especially in scenarios where multiple data requests are made within a short timeframe. This pattern is commonly used in GraphQL servers to optimize data fetching for resolving nested or dependent data queries efficiently.

## Deployment
- Docker: Containerizing the application for consistency across environments.
- CI/CD: Automating build, test, and deployment processes using GitHub Actions.
- AWS: 
    - For development environment, I would deploy everything on an EC2/Lambda instance with their corresponding dependencies such as S3, RDS, etc.
        - EC2: Amazon Elastic Compute Cloud (EC2) provides resizable compute capacity in the cloud. It allows you to quickly scale capacity up or down according to demand, making it suitable for hosting applications during development. You can install necessary dependencies and services directly on the EC2 instance.
        - Lambda: AWS Lambda is a serverless compute service that runs code in response to events and automatically manages the underlying infrastructure. It's suitable for running small, event-driven functions during development without the need to provision or manage servers.
    - For production deployment, I would use Kubernetes (K8s):
        Kubernetes: Kubernetes is an open-source container orchestration platform for automating deployment, scaling, and management of containerized applications. It provides a highly available and scalable infrastructure for running production workloads, with features such as auto-scaling, service discovery, and rolling updates. By deploying your application on Kubernetes, you can ensure reliability, scalability, and flexibility in managing your production environment.
- Load Balancer: Implement a load balancer to distribute incoming traffic across multiple instances of your application, ensuring high availability and fault tolerance. This helps distribute the load evenly and improves the overall performance and reliability of the system.

## Monitoring
For monitoring, I would implement CloudWatch and Grafana.
- CloudWatch: CloudWatch is a monitoring and observability service provided by Amazon Web Services (AWS). It allows users to collect and track metrics, monitor log files, set alarms, and automatically react to changes in their AWS resources and applications. CloudWatch provides insights into resource utilization, application performance, and operational health, enabling users to optimize their AWS environment and ensure a seamless user experience.
- Grafana: Grafana is an open-source platform for monitoring and observability, widely used for creating custom dashboards and visualizing time-series data. It supports various data sources, including CloudWatch, Prometheus, and Elasticsearch, allowing users to aggregate metrics from multiple sources into unified dashboards. Grafana offers a rich set of visualization options, alerting capabilities, and integrations with other monitoring tools, making it a versatile solution for monitoring modern cloud-based environments.

## Security
As a security guarantee, I would implement the OWASP suite to validate the integrity and robustness of the system.
- OWASP: The Open Web Application Security Project (OWASP) is a non-profit organization focused on improving the security of software. It provides resources, tools, and guidelines to help developers build secure web applications and APIs. By following OWASP best practices and recommendations, you can mitigate common security vulnerabilities such as injection attacks, broken authentication, and sensitive data exposure, ensuring that your application is protected against potential threats.