package mk.ukim.finki.emt.eshop.service;

import mk.ukim.finki.emt.eshop.model.Discount;
import mk.ukim.finki.emt.eshop.model.dto.DiscountDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

public interface DiscountService {

    List<Discount> findAll();

    Page<Discount> findAllWithPagination(Pageable pageable);

    Optional<Discount> findById(Long id);

    Optional<Discount> save(DiscountDto discountDto);

    Optional<Discount> edit(Long id, DiscountDto discountDto);

    void deleteById(Long id);

    Optional<Discount> assignDiscount(String username, Long discountId);
}
