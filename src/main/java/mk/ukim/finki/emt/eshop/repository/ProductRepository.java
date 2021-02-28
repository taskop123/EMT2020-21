package mk.ukim.finki.emt.eshop.repository;

import mk.ukim.finki.emt.eshop.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ProductRepository extends JpaRepository<Product, Long> {
    Optional<Product> findByName(String name);
    Optional<Product> findByNameAndPriceLessThan(String name, Double price);
    void deleteByName(String name);
}
