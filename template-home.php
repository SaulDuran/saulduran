<?php
/**
 * Template Name: Home
 */
?>

<?php while (have_posts()) : the_post(); ?>
	<?php
	$dist_path = get_template_directory_uri() . '/dist/';
	$dist_path_t = get_template_directory_uri();
	?>

	<section id="home">
		<div class="home-tx">
			<h1>Saúl Durán</h1>
			<h2>creatividad + diseño + código</h2>
			<h3>ciudad de méxico</h3>
			<h3 class="home-mail"><a href="mailto:hola@saulduran.mx">hola@saulduran.mx</a></h3>
			<div class="arrow"></div>
		</div>
	</section>

	<section id="projects">
		<?php if( have_rows('work') ): ?>
		<?php while( have_rows('work') ): the_row(); 
			$work = get_sub_field('sd_work');
			$cliente = get_sub_field('sd_cliente');
			$caract = get_sub_field('sd_caracteristicas');
			$link = get_sub_field('sd_link');
			$image = get_sub_field('sd_imagen');
		?>
		<div class="lastProject" style="background-image: url(<?= $image; ?>);" data-surl="<?= $link; ?>">
			<div class="lastProject-hover">
				<div class="lastProject-details">
					<div class="lastProject-cliente"><?= $cliente; ?></div>
					<div class="lastProject-work"><h6><?= $work; ?></h6></div>
					<div class="lastProject-car"><?= $caract; ?></div>
					<div class="lastProject-car"><a href="<?= $link; ?>" target="_blank">ver proyecto</a></div>
				</div>
			</div>
		</div>	
		<?php endwhile; ?>
		<?php endif; ?> 
		
	</section>

<?php endwhile; ?>
