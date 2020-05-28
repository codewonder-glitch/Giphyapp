package  com.visa.spring.mySpringBootApp.repository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;


import com.visa.spring.mySpringBootApp.model.Employee;

@Repository

public interface EmployeeRepository extends JpaRepository<Employee, Long>{



}